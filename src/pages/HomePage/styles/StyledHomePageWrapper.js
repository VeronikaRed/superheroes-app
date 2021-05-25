import styled from 'styled-components';
import { StyledTitle } from '../../../styles/StyledTitle';
import { StyledButton } from '../../../components/Button';

export const StyledHomePageWrapper = styled.div`
    max-width: 100%;
    padding: ${props => props.theme.padding.sm};
    text-align: center;

    ${StyledTitle} {
        padding-top: ${props => props.theme.padding.lg};
        margin-bottom: 0;
    }

    ${StyledButton} {
        box-shadow: 0 0 0 2px ${props => props.theme.primaryClr};
    }
`;
