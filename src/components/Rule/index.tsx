import React from 'react';
import Hero from '../../images/hero.png';
import { Form, Image, ImageContainer, InputContainer, P, Button } from './elements';

function Rule({ startGame, handleChange, totalCards }: any) {
    console.log(totalCards);
    return (
        <Form onSubmit={startGame}>
            <ImageContainer>
                <Image height="400" width="600" src={Hero} alt="hero" />
            </ImageContainer>
            <InputContainer>
                <P>Select no of cards</P>
                <label>3</label>
                <input
                    type="radio"
                    value="3"
                    onChange={handleChange}
                    name="totalCards"
                    checked={totalCards === '3'}
                />
                <label>5</label>
                <input
                    type="radio"
                    value="5"
                    onChange={handleChange}
                    name="totalCards"
                    checked={totalCards === '5'}
                />
                <label>10</label>
                <input
                    type="radio"
                    value="10"
                    onChange={handleChange}
                    name="totalCards"
                    checked={totalCards === '10'}
                />
                <Button>Generate Cards</Button>
            </InputContainer>
        </Form>
    );
}

export default Rule;
