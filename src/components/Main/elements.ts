import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 65vh;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    font-size: 2rem;
    color: #924d8b;
`;
