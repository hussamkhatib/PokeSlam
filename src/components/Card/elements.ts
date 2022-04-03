import styled from 'styled-components';

export const Image = styled.img`
    grid-area: 1/1/ 2/-1;
`;

export const Stats = styled.p`
    margin: 0;
    font-size: 1em;
    padding: 0 0.2em;
    justify-self: flex-start;
`;

export const Name = styled.h2`
    grid-column: 1/-1;
    margin: 0;
    padding: 0.2em;
    font-size: 1.6em;
    justify-items: center;
    margin-bottom: 0.2em;
`;

interface CardContainerProps {
    GridColumn: any;
}

export const CardContainer = styled.div<CardContainerProps>`
    display:grid;
    grid-template: ${(props) => `100px 1.5fr repeat(3,1fr) / ${props.GridColumn}`};
    height: 35vh;
    border: 2px solid #e6e6e6;
    background: #924d8b;
    transition: all .2s ease-in-out;
    width:max-content;
    justify-items: center;
    &:hover { transform: scale(1.1);`;

interface WrapperProps {
    Absolute: any;
}

export const Wrapper = styled.div<WrapperProps>`
    ${(props) =>
        props.Absolute
            ? `position: absolute;
            z-index: 2;
            display: flex;
            background: #fff;
            height: 35vh;
            width: 100vw;
            bottom: 0;
            overflow-x: auto;
            overflow-y: hidden;`
            : ''}
`;
