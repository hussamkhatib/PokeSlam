import React from 'react';
import styled from 'styled-components';

const Count = ({ Total }) => {
  const Div = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    bottom: 35vh;
  `;
  const P = styled.p`
    font-size: 1.2em;
    margin: 0;
    padding: 0.4em;
  `;
  const Span = styled.span`
    color: ${(props) => (props.primary ? Total[2][0] : Total[2][1])};
  `;
  return (
    <Div>
      <P>
        Your Cards : <Span primary>{Total[0]}</Span>
      </P>
      <P>
        Cpu Cards : <Span>{Total[1]}</Span>
      </P>
    </Div>
  );
};

export default Count;
