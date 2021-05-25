import styled from 'styled-components/macro';

export const StyledForm = styled.form.attrs({ noValidate: true })`
    background-color: ${props => props.theme.lightColors[600]};
    padding: ${props => props.theme.padding.lg};
`;
