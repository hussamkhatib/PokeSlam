import React, { useState, useEffect, FC } from 'react';
import { getPokemons } from '../../helper';
import Card from '../Card';
import Options from '../Options';
import Count from '../Count';
import { Wrapper, Rotate } from './elements';
import { result } from '../../types';

interface Props {
    totalCards: number;
    endGame: (param: result) => void;
}

const Main: FC<Props> = ({ totalCards, endGame }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [myStats, setMyStats] = useState<any[]>([]);
    const [cpuStats, setCpuStats] = useState<any[]>([]);
    const [revealCard, setRevealCard] = useState(false);
    const [status, setStatus] = useState(false);
    const [output, setOutput] = useState(['#fff', '#fff']);
    const [currentStat, setCurrentStat] = useState<any[] | null>(null);
    const myActiveCard = myStats.slice(0, 1);
    const cpuActiveCard = cpuStats.slice(0, 1);

    const buttons = ['hp', 'attack', 'defence', 'sp-attack', 'sp-defence', 'speed'];

    const handleClick = (e: any) => {
        setRevealCard(true);
        setStatus(true);
        const index = buttons.indexOf(e.target.innerText);
        setCurrentStat([statsOf(myStats), statsOf(cpuStats), e.target.innerText]);
        function statsOf(el: any) {
            return el[0].stats[index].base_stat;
        }
    };
    const next = () => {
        setStatus(false);
        setRevealCard(false);
        if (currentStat?.[0] > currentStat?.[1]) {
            if (cpuStats.length === 1) {
                endGame(result.win);
            } else {
                setCpuStats([...cpuStats].slice(1));
                setMyStats([...myStats, cpuStats[0], myStats[0]].slice(1));
                setOutput(['green', 'red']);
            }
        } else if (myStats.length === 1) {
            endGame(result.lose);
        } else {
            setMyStats([...myStats].slice(1));
            setCpuStats([...cpuStats, myStats[0], cpuStats[0]].slice(1));
            setOutput(['red', 'green']);
        }
    };
    useEffect(() => {
        const setPokemons = async () => {
            setMyStats(await getPokemons(totalCards));
            setCpuStats(await getPokemons(totalCards));
            setIsLoaded(true);
        };
        setPokemons();
    }, [totalCards]);
    if (!isLoaded) {
        return <Rotate> ϞϞ(๑⚈ ․̫ ⚈๑)∩ </Rotate>;
    }
    return (
        <>
            <Wrapper>
                <Card
                    PokeStats={myActiveCard}
                    GridColumn="150px 150px"
                    Absolute={false}
                    Type={false}
                />
                <Options
                    handleClick={handleClick}
                    Buttons={buttons}
                    Status={status}
                    Next={next}
                    CurrentStat={currentStat}
                />
                <Card
                    PokeStats={cpuActiveCard}
                    GridColumn="150px 150px"
                    Type={revealCard}
                    Absolute={false}
                />
            </Wrapper>
            <Card PokeStats={myStats} Absolute GridColumn="110px 110px" Type={false} />
            <Count Total={[myStats.length, cpuStats.length, output]} />
        </>
    );
};
export default Main;
