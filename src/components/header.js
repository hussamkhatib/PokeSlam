import React from 'react'
import styled from 'styled-components'

const Header = () => {
    const Title = styled.h1`
    position:absolute;
    color: #ff6f91;`

    return (
        <>
            <Title>
                PokeWars
            </Title>    
        </>
    )
}

export default Header
