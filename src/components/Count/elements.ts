import styled from 'styled-components';

export const Div = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    bottom: 35vh;
`;
export const P = styled.p`
    font-size: 1.2em;
    margin: 0;
    padding: 0.4em;
`;


interface SpanProps {
    primary?: any;
    Total: any;
  }

export const Span = styled.span<SpanProps>`
color: ${(props) => (props.primary ? props.Total[2][0] : props.Total[2][1])};
`;