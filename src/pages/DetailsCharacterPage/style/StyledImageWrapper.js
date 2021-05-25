import styled from 'styled-components/macro';
import { StyledButton } from '../../../components/Button';

export const StyledImageWrapper = styled.div`
    position: relative;
    z-index: 2;
    ${StyledButton} {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        background-color: transparent;
    }
`;
