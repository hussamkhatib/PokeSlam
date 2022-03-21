import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50px;
  gap: 0.1em;
`;
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  padding: 0.6em 1em;
  background: #924d8b;
  border: 2px solid #e6e6e6;
  color: inherit;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const Result = styled.p``;
const Span = styled.span`
  color: #924d8b;
`;

function Options({ handleClick, Buttons, Status, Next, CurrentStat }) {
  return (
    <>
      {!Status && (
        <GridWrapper>
          {Buttons.map((btn) => (
            <Button onClick={handleClick}>{btn}</Button>
          ))}
        </GridWrapper>
      )}

      {Status && (
        <FlexWrapper>
          <Result>
            Your {CurrentStat[2]} <Span>{CurrentStat[0]}</Span>
          </Result>
          <Result>
            Cpu {CurrentStat[2]} <Span>{CurrentStat[1]}</Span>
          </Result>
          <Button onClick={Next}>okay</Button>
        </FlexWrapper>
      )}
    </>
  );
}

export default Options;
