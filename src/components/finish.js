import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 0.4em;
`;
const P = styled.p`
  font-size: 1.4em;
`;

const Finish = ({ WinOrLose, Reset }) => {
  return (
    <Wrapper>
      <P>you {WinOrLose}</P>
      <Button onClick={Reset}>Play Again</Button>
    </Wrapper>
  );
};

export default Finish;
