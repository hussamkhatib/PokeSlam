import React from 'react';
import styled from 'styled-components';
import Hero from '../images/hero.png';

const Form = styled.form`
  height: 100vh;
  display: grid;
  grid-template-rows: 4fr 1fr;
`;
const ImageContainer = styled.div`
  background: #fff;
`;

const Image = styled.img`
  height: 100%;
  max-width: 100%;
  display: block;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  margin: 0 auto;
`;

const P = styled.p`
  margin: 0;
  padding: 0.6em 0;
  font-size: 1.2em;
`;
const Button = styled.button`
  display: block;
  padding: 0.4em;
`;

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
