import styled from 'styled-components/macro';

import { StyledButton } from '../../../components/Button';

const maxWidth = '60rem';

export const StyledFormWrapper = styled.div`
    max-width: ${maxWidth};
    width: 100%;
    border-radius: ${props => props.theme.borderRadius.md};
    box-shadow: 0 0.6rem 1rem ${props => props.theme.darkColors[800]};

    ${StyledButton} {
        margin: 0 auto;
    }
`;
