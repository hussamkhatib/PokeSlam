import React from 'react'
import styled from 'styled-components'
import Hero from '../images/hero.png'

const Rule = ({ startGame,prop }) => {
   
    const Form = styled.form`
    height:100vh;
    display:grid;
    grid-template-rows: 4fr 1fr;`    
    const ImageContainer=styled.div`
    background:#fff;`

    const Image = styled.img`
    height:100%;
    max-width:100%;
    display:block;
    margin:0 auto;`

    const InputContainer = styled.div`
    margin:0 auto;`

    const P = styled.p`
    margin:0;
    padding: .6em 0;
    font-size:1.2em;`
    const Button = styled.button`
    display:block;
    padding:.4em;`
    return (
            <Form ref={prop} onSubmit={startGame}>
                <ImageContainer>
               <Image height='400' width='600' src={Hero} alt='hero'/>
               </ImageContainer>
               <InputContainer>
                <P>Select no of cards</P>
                <input type="radio" value="3" name="totalCards" checked/> 3
                <input type="radio" value="5" name="totalCards" /> 5
                <input type="radio" value="10" name="totalCards" /> 10
                <Button>Generate Cards</Button>
                </InputContainer>
            </Form>
    )
}

export default Rule
