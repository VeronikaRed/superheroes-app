import styled from 'styled-components/macro';

export const StyledTextarea = styled.textarea`
    color: ${props => props.theme.darkColors[900]};
    cursor: pointer;
    display: block;
    width: 100%;
    border: none;
    outline-color: ${props => props.theme.primaryClr};
`;
