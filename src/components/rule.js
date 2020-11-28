import React from 'react'
import styled from 'styled-components'

const Rule = ({ startGame,prop }) => {
    const Wrapper = styled.div``
    const Button = styled.button``
    
    return (
        <Wrapper>
            <form ref={prop} onSubmit={startGame}>
                <input type="radio" value="3" name="totalCards" /> 3
                <input type="radio" value="5" name="totalCards" /> 5
            <Button>Start Game</Button>
            </form>
        </Wrapper>
    )
}

export default Rule
