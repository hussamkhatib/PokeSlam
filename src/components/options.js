import React from 'react'
import styled from 'styled-components'

const Options = () => {
    const Wrapper = styled.div`
    position:absolute;
    bottom:0;`
    const buttons = ['hp','attack','defence','special-attack','special-defence','speed']
    return (
        <Wrapper>
            {buttons.map(btn => 
                (
                <button>{btn}</button>
                )
                )}
        </Wrapper>
    )
}

export default Options
