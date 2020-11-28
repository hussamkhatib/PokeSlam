import { getPokemons } from '../helper'
import React, { useState,useEffect} from 'react'
import styled from 'styled-components'
import Card from './card'
const Main = ({ totalCards }) => {
   
  const Wrapper = styled.div`
  display:grid;
  grid-template-columns: repeat(10,1fr);
  grid-auto-flow: column;`

    const [myStats,setMyStats] = useState([])
    const [cpuStats,setCpuStats] = useState([])

    useEffect(() => {
        const setPokemons = async () => {
          setMyStats(await getPokemons(totalCards));
          setCpuStats(await getPokemons(totalCards));
        };
        setPokemons();  
      }, [totalCards]);
    
    return (
        <Wrapper>
          <Card PokeStats={myStats} PokeUser='OPPONENT'/>
          <Card PokeStats={cpuStats} PokeUser='YOU'/>
       </Wrapper>
        )
}
export default Main