import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    grid-area: 1/1/ 2/-1;
`;
const Stats = styled.p`
    margin: 0;
    font-size: 1em;
    padding: 0 0.2em;
    justify-self: flex-start;
`;
const Name = styled.h2`
    grid-column: 1/-1;
    margin: 0;
    padding: 0.2em;
    font-size: 1.6em;
    justify-items: center;
    margin-bottom: 0.2em;
`;
const Card = ({ PokeStats, Absolute, GridColumn, Type }) => {
    const CardContainer = styled.div`
    display:grid;
    grid-template: 100px 1.5fr repeat(3,1fr) / ${GridColumn};
    height: 35vh;
    border: 2px solid #e6e6e6;
    background: #924d8b;
    transition: all .2s ease-in-out;
    width:max-content;
    justify-items: center;
    &:hover { transform: scale(1.1);`;
    const Wrapper = Absolute
        ? styled.div`
              position: absolute;
              z-index: 2;
              display: flex;
              background: #fff;
              height: 35vh;
              width: 100vw;
              bottom: 0;
              overflow-x: auto;
              overflow-y: hidden;
          `
        : styled.div``;

    if (Type === false) {
        return (
            <Wrapper>
                <CardContainer>
                    <Name>Type : {PokeStats[0].types[0].type.name}</Name>
                </CardContainer>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            {PokeStats &&
                PokeStats.map((stat) => (
                    <CardContainer key={stat.id}>
                        <Image src={stat.sprites.front_default} alt="pokemon" />
                        <Name>{stat.name}</Name>
                        <Stats>hp {stat.stats[0].base_stat}</Stats>
                        <Stats>attack {stat.stats[1].base_stat}</Stats>
                        <Stats>defence {stat.stats[2].base_stat}</Stats>
                        <Stats>sp-attack {stat.stats[3].base_stat}</Stats>
                        <Stats>sp-defence {stat.stats[4].base_stat}</Stats>
                        <Stats>speed {stat.stats[5].base_stat}</Stats>
                    </CardContainer>
                ))}
        </Wrapper>
    );
};

export default Card;
