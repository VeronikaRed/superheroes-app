import styled from 'styled-components/macro';

export const StyledWrapper = styled.div`
    padding: ${props => props.theme.padding.md};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
