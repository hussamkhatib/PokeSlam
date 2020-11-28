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
    useEffect(() => {
        const setPokemons = async () => {
          setStats(await getPokemons());
        };
    
        setPokemons();  
      }, []);
    
      const names = stats.map(item => ( 
        <p key={item.id}>{item.name}</p> 
      ));

    return (
        <Wrapper>
        {names}
      </Wrapper>
        )
}
export default Main