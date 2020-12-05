import React from 'react'
import styled from 'styled-components'

const Options = ({ handleClick,Buttons,Status,Output,Next,User,Cpu,CurrentStat }) => {
    const GridWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 50px;
    gap:0.1em;`
    const FlexWrapper = styled.div`
    `
    const Button = styled.button`
    padding: .6em 1em;
    background:#924d8b;
    border: 2px solid #e6e6e6;
    color:inherit;
    &:hover{
        cursor:pointer;
        transform: scale(1.1);
    }`
    const Result = styled.p`
    `
    const Span = styled.span`
    color: ${props => props.primary ? Output[1] : Output[2] };`

    return (
        <>
      
        {!Status && 
          <GridWrapper>
        {Buttons.map(btn => 
                (
                <Button onClick={handleClick}>{btn}</Button>
                )
        )}
        </GridWrapper>
        }

        {Status && 
        <FlexWrapper>
            <Result>{CurrentStat[0]} {Output[0]} {CurrentStat[1]}</Result>
            <Result>Your Cards <Span primary>{User.length}</Span></Result>
            <Result>Cpu Cards <Span>{Cpu.length}</Span></Result>
            <Button onClick={Next}>okay</Button>
         </FlexWrapper>
         }
    </>    
    )
}

export default Options
