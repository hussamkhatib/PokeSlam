import styled from 'styled-components';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 50px;
    gap: 0.1em;
`;
export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Button = styled.button`
    padding: 0.6em 1em;
    background: #924d8b;
    border: 2px solid #e6e6e6;
    color: inherit;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;
export const Result = styled.p``;
export const Span = styled.span`
    color: #924d8b;
`;
