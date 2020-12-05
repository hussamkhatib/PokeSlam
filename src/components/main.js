import { getPokemons } from '../helper'
import React, { useState,useEffect} from 'react'
import styled from 'styled-components'
import Card from './card'
import Options from './options'
const Main = ({ totalCards,endGame }) => {
   
    const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items:center;
  height: 65vh;`
    const [isLoaded, setIsLoaded] = useState(false);
    const [myStats, setMyStats] = useState([])
    const [cpuStats,setCpuStats] = useState([])
    const [revealCard,setRevealCard] = useState(true)
    const [status,setStatus] = useState(false)
    const [output,setOutput] = useState(undefined)
    const [currentStat,setCurrentStat] = useState(undefined)
    const myActiveCard = myStats.slice(0,1)
    const cpuActiveCard = cpuStats.slice(0,1)

    const buttons = ['hp','attack','defence','sp-attack','sp-defence','speed']

    const handleClick = (e) => {
      setRevealCard(true)
      setStatus(true)
      let index = buttons.indexOf(e.target.innerText)
      setCurrentStat([statsOf(myStats),statsOf(cpuStats)])
      if(statsOf(myStats) > statsOf(cpuStats)){
        setCpuStats([...cpuStats].slice(1))
        setMyStats([...myStats,cpuStats[0],myStats[0]].slice(1))
        setOutput(['>','green','red'])
      }else{
        setMyStats([...myStats].slice(1))
        setCpuStats([...cpuStats,myStats[0],cpuStats[0]].slice(1))
        setOutput(['<','red','green'])
      }
      function statsOf(el){
        return el[0].stats[index].base_stat
      }
    }
    const next = () => {
      setStatus(false)
      if(myStats.length || cpuStats.length === 0 ){
         endGame 
      }
    }
     useEffect(() => {
        const setPokemons = async () => {
          setMyStats(await getPokemons(totalCards));
          setCpuStats(await getPokemons(totalCards));
          setIsLoaded(true);
        };
        setPokemons();  
      }, [totalCards]);
      if (!isLoaded) {
        return <div>Loading...</div>
      }
    return (
      <>
    <Wrapper>  
      <Card PokeStats={myActiveCard} GridColumn='150px 150px'/>
      <Options handleClick={handleClick} Buttons={buttons} Status={status} Output={output} Next={next}
       User={myStats} Cpu={cpuStats} CurrentStat={currentStat}/>
      <Card PokeStats={cpuActiveCard} GridColumn='150px 150px' Type={revealCard}/>
    </Wrapper>
      <Card PokeStats={myStats} Absolute='true' GridColumn='110px 110px'/>
  </>
        )
}
export default Main