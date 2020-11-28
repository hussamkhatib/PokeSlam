import React, { useState,useEffect} from 'react'
import { getPokemons } from '../helper'
import styled from 'styled-components'

const Main = ({ totalCards }) => {
   
  const Wrapper = styled.div`
  display:grid;
  grid-template-columns: repeat(10,1fr);
  grid-auto-flow: column;`
  const Name = styled.h2`
  grid-column: 1/-1;
  margin:0;
  padding:0;
  font-size:1em;
  `
  const CardContainer =styled.div`
  display:grid;
  grid-template: 100px repeat(4,1fr) / 1fr 1fr;
  border: 2px solid #e6e6e6;
  justify-items:center;`

  const Image = styled.img`
  grid-area: 1/1/ 2/-1;
  `

  const Stats = styled.p`
  margin:0;
  font-size:0.8em;
  padding:0;
`
    const [stats,setStats] = useState([])

    useEffect(() => {
        const setPokemons = async () => {
          setStats(await getPokemons(totalCards));
        };
        setPokemons();  
      }, [totalCards]);
    
    return (
        <Wrapper>
        {stats && stats.map(item =>  (
          <CardContainer key={item.id}>
            <Image src={item.sprites.front_default} alt='pokemon'/>
          <Name>
            {item.name}
          </Name>
        <Stats>hp {item.stats[0].base_stat}</Stats>
        <Stats>atk {item.stats[1].base_stat}</Stats>
        <Stats>def {item.stats[2].base_stat}</Stats>
        <Stats>sp-atk {item.stats[3].base_stat}</Stats>
        <Stats>sp-def {item.stats[4].base_stat}</Stats>
        <Stats>spd {item.stats[5].base_stat}</Stats>
          </CardContainer>
        ))}
      
      </Wrapper>
        )
}
export default Main