import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
    padding: ${props => props.theme.padding.md};
    color: ${props => props.theme.header.color};
    background: ${props => props.theme.header.background};

    h1 {
        letter-spacing: 5px;
        cursor: pointer;
        text-shadow: 7px 0px 7px red;
    }
`;
