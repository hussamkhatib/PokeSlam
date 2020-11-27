import React, { useState,useEffect} from 'react'
import { getPokemons } from '../helper'
import styled from 'styled-components'

const Main = () => {
    const Wrapper = styled.div`
    `
    //const Name = styled.h2`
    //`
    //const Stats = styled.p``
   // const [totalCards,useTotalCards] = useState(0);
   // const [items,setItems]= useState([])
    const [stats,setStats] = useState([])
   /**    <Name>{item[0]}</Name>
            <Stats>HP {item[1]}</Stats>
            <Stats>Attack {item[1]}</Stats>

            <Stats>Defence {item[2]}</Stats>
            <Stats>Special-Attack {item[3]}</Stats>
            <Stats>Special-Defense {item[4]}</Stats>
            <Stats>Speed {item[5]}</Stats> */

  
     useEffect(()=>{
          setStats(getPokemons())  
    },[])
    console.log(getPokemons())
    return (
        <Wrapper>
            {stats.map(item => (
                <p>render{item.name}</p>
            ))}            
        </Wrapper>
        )
}

export default Main