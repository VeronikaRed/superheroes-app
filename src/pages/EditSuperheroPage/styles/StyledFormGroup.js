import styled from 'styled-components/macro';

export const StyledFormGroup = styled.div`
    &:not(:last-child) {
        margin-bottom: ${props => props.theme.margin.md};
    }
`;
