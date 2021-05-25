import { forwardRef } from 'react';
import { StyledTextarea } from './styles';

export const Textarea = forwardRef(
    ({ autoComplete = 'off', ...other }, ref) => (
        <StyledTextarea ref={ref} {...other}></StyledTextarea>
    )
);
