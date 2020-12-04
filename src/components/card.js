import React from 'react'
import styled from 'styled-components'

const Card = ({ PokeStats,Absolute,GridColumn,Type }) => {
const Image = styled.img`
grid-area: 1/1/ 2/-1;
`
const Stats = styled.p`
margin:0;
font-size:1em;
padding:0 0.2em;
justify-self: flex-start;
`
const Name = styled.h2`
grid-column: 1/-1;
margin:0;
padding:0.2em;
font-size:1.6em;
justify-items:center;
margin-bottom:0.2em;
`
const CardContainer =styled.div`
display:grid;
grid-template: 100px 1.5fr repeat(3,1fr) / ${GridColumn};
border: 2px solid #e6e6e6;
background: #924d8b;
height: 35vh;
transition: all .2s ease-in-out;
width:max-content;
justify-items: center;
&:hover { transform: scale(1.1);`
const Wrapper = Absolute ? 
styled.div`position:absolute;
z-index: 2;
display: flex;
background: #fff;
height: 35vh;
width:100vw;
bottom:0;` 
: styled.div``

if(Type === false){
  return(
    <Wrapper>
      <CardContainer>
      <Name>Type : {PokeStats[0].types[0].type.name}</Name>
      </CardContainer>
    </Wrapper>
  )
}

return (
        
        <Wrapper> 
            {PokeStats && PokeStats.map(item =>  (
            <CardContainer key={item.id}>
            <Image src={item.sprites.front_default} alt='pokemon'/>
          <Name>
            {item.name}
          </Name>
        <Stats>hp {item.stats[0].base_stat}</Stats>
        <Stats>attack {item.stats[1].base_stat}</Stats>
        <Stats>defence {item.stats[2].base_stat}</Stats>
        <Stats>sp-attack {item.stats[3].base_stat}</Stats>
        <Stats>sp-defence {item.stats[4].base_stat}</Stats>
        <Stats>speed {item.stats[5].base_stat}</Stats>
          </CardContainer>
        ))}
        
        </Wrapper> 
    )
}


export default Card
