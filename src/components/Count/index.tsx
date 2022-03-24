import React from 'react';
import { P, Div, Span } from './elements';

const Count = ({ Total }: any) => (
    <Div>
        <P>
            Your Cards :
            <Span primary Total={Total}>
                {Total[0]}
            </Span>
        </P>
        <P>
            Cpu Cards :<Span Total={Total}>{Total[1]}</Span>
        </P>
    </Div>
);

export default Count;
