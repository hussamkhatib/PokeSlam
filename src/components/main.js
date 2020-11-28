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
     useEffect(()=>{
      generateTrio()  
        },[])
        
    async function generateTrio() {
        const gTrio = await getPokemons();
        setStats(gTrio)
        }

    return (
        <Wrapper>
             { stats.map((item,index) => ( 
                 <p key={index}>render{item.name}</p> 
             ))}
             <p>a{stats}</p>
        </Wrapper>
        )
}
export default Main