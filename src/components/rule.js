import React from 'react'
import styled from 'styled-components'

const Rule = ({ startGame,prop }) => {
    const Wrapper = styled.div``
    const Button = styled.button``
    const Input = styled.input``
    const Form = styled.form``    
    return (
        <Wrapper>
            <Form ref={prop} onSubmit={startGame}>
                <Input type="radio" value="3" name="totalCards" checked/> 3
                <Input type="radio" value="5" name="totalCards" /> 5
            <Button>Start Game</Button>
            </Form>
        </Wrapper>
    )
}

export default Rule
