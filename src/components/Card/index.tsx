import React, { FC } from 'react';
import { Image, Stats, Name, Wrapper, CardContainer } from './elements';

interface Props {
    PokeStats: any;
    Absolute: boolean;
    GridColumn: string;
    Type: boolean;
}

const Card: FC<Props> = ({ PokeStats, Absolute, GridColumn, Type }) => {
    if (Type === false) {
        return (
            <Wrapper Absolute={Absolute}>
                <CardContainer GridColumn={GridColumn}>
                    <Name>Type :{PokeStats[0].types[0].type.name}</Name>
                </CardContainer>
            </Wrapper>
        );
    }

    return (
        <Wrapper Absolute={Absolute}>
            {PokeStats
                ? PokeStats.map((stat: any) => (
                      <CardContainer key={stat.id} GridColumn={GridColumn}>
                          <Image src={stat.sprites.front_default} alt="pokemon" />
                          <Name>{stat.name}</Name>
                          <Stats>
                              hp
                              {stat.stats[0].base_stat}
                          </Stats>
                          <Stats>
                              attack
                              {stat.stats[1].base_stat}
                          </Stats>
                          <Stats>
                              defence
                              {stat.stats[2].base_stat}
                          </Stats>
                          <Stats>
                              sp-attack
                              {stat.stats[3].base_stat}
                          </Stats>
                          <Stats>
                              sp-defence
                              {stat.stats[4].base_stat}
                          </Stats>
                          <Stats>
                              speed
                              {stat.stats[5].base_stat}
                          </Stats>
                      </CardContainer>
                  ))
                : null}
        </Wrapper>
    );
};

export default Card;
