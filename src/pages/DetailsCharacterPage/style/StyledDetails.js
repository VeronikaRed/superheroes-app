import styled from 'styled-components/macro';
import backdrop from '../../../resources/backdrop.jpg';

export const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${backdrop});
    border-radius: ${props => props.theme.borderRadius.md};
    padding: ${props => props.theme.padding.md};
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.darkColors[800]};
        border-radius: ${props => props.theme.borderRadius.md};
    }
`;
