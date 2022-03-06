import { getPokemons } from '../helper';
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Card from './card';
import Options from './options';
import Count from './count';

const Main = ({ totalCards, endGame }) => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 65vh;
  `;
  const rotate = keyframes`
      from {
        transform: rotate(0deg);
      }
    
      to {
        transform: rotate(360deg);
      }
    `;
  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    font-size: 2rem;
    color: #924d8b;
  `;
  const [isLoaded, setIsLoaded] = useState(false);
  const [myStats, setMyStats] = useState([]);
  const [cpuStats, setCpuStats] = useState([]);
  const [revealCard, setRevealCard] = useState(false);
  const [status, setStatus] = useState(false);
  const [output, setOutput] = useState(['#fff', '#fff']);
  const [currentStat, setCurrentStat] = useState(undefined);
  const myActiveCard = myStats.slice(0, 1);
  const cpuActiveCard = cpuStats.slice(0, 1);

  const buttons = ['hp', 'attack', 'defence', 'sp-attack', 'sp-defence', 'speed'];

  const handleClick = (e) => {
    setRevealCard(true);
    setStatus(true);
    let index = buttons.indexOf(e.target.innerText);
    setCurrentStat([statsOf(myStats), statsOf(cpuStats), e.target.innerText]);
    function statsOf(el) {
      return el[0].stats[index].base_stat;
    }
  };
  const next = () => {
    setStatus(false);
    setRevealCard(false);
    if (currentStat[0] > currentStat[1]) {
      if (cpuStats.length === 1) {
        endGame('win');
      } else {
        setCpuStats([...cpuStats].slice(1));
        setMyStats([...myStats, cpuStats[0], myStats[0]].slice(1));
        setOutput(['green', 'red']);
      }
    } else {
      if (myStats.length === 1) {
        endGame('lose');
      } else {
        setMyStats([...myStats].slice(1));
        setCpuStats([...cpuStats, myStats[0], cpuStats[0]].slice(1));
        setOutput(['red', 'green']);
      }
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
        <Card PokeStats={myActiveCard} GridColumn="150px 150px" />
        <Options
          handleClick={handleClick}
          Buttons={buttons}
          Status={status}
          Next={next}
          CurrentStat={currentStat}
        />
        <Card PokeStats={cpuActiveCard} GridColumn="150px 150px" Type={revealCard} />
      </Wrapper>
      <Card PokeStats={myStats} Absolute="true" GridColumn="110px 110px" />
      <Count Total={[myStats.length, cpuStats.length, output]} />
    </>
  );
};
export default Main;
