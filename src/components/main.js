import { getPokemons } from '../helper'
import React, { useState,useEffect} from 'react'
import styled from 'styled-components'
import Card from './card'
import Options from './options'
const Main = ({ totalCards }) => {
   
  const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items:center;
  height: 65vh;`
    const [isLoaded, setIsLoaded] = useState(false);
    const [myStats,setMyStats] = useState([])
    const [cpuStats,setCpuStats] = useState([])
    const [revealCard,setRevealCard] = useState(false)
    const myActiveCard = myStats.slice(0,1)
    const cpuActiveCard = cpuStats.slice(0,1)

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
      <Card PokeStats={cpuActiveCard} GridColumn='150px 150px' Type={revealCard}/>
    </Wrapper>
      <Card PokeStats={myStats} Absolute='true' GridColumn='110px 110px'/>
  <Options />
  </>
        )
}
export default Main