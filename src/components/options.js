import React from 'react'
import styled from 'styled-components'

const Options = ({ handleClick,Buttons }) => {
    const Wrapper = styled.div`
    display:grid;`

    return (
        <Wrapper>
            {Buttons.map(btn => 
                (
                <button onClick={handleClick}>{btn}</button>
                )
                )}
        </Wrapper>
    )
}

export default Options
