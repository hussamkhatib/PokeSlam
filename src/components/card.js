import React from 'react'
import styled from 'styled-components'

const Card = ({ PokeStats,PokeUser }) => {
const Image = styled.img`
grid-area: 1/1/ 2/-1;
`
const Stats = styled.p`
margin:0;
font-size:0.8em;
padding:0;
`
const Name = styled.h2`
grid-column: 1/-1;
margin:0;
padding:0;
font-size:1em;
`
const CardContainer =styled.div`
display:grid;
justify-items:center;
grid-template: 100px repeat(4,1fr) / 1fr 1fr;
border: 2px solid #e6e6e6;
background: #924d8b;
transition: all .2s ease-in-out;
&:hover { transform: scale(1.1);`
const User = styled.h2`
`
return (
        <>
            <User>{PokeUser}</User>
            {PokeStats && PokeStats.map(item =>  (
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
        </>
    )
}


export default Card
