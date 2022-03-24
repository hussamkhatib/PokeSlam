import React from 'react';
import { Wrapper, Button, P } from './elements';

const Finish = ({ WinOrLose, Reset }: any) => {
    return (
        <Wrapper>
            <P>you {WinOrLose}</P>
            <Button onClick={Reset}>Play Again</Button>
        </Wrapper>
    );
};

export default Finish;
