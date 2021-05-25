import styled from 'styled-components/macro';
import { StyledButton } from '../components/Button';

export const StyledWrapperButton = styled.div`
    display: flex;
    column-gap: 5px;

    ${StyledButton} {
        min-width: 17rem;
    }
`;
