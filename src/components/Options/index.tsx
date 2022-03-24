import React from 'react';

import { GridWrapper, FlexWrapper, Button, Result, Span } from './elements';

function Options({ handleClick, Buttons, Status, Next, CurrentStat }: any) {
    return (
        <>
            {!Status && (
                <GridWrapper>
                    {Buttons.map((btn: any) => (
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
