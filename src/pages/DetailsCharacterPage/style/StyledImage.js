import styled from 'styled-components/macro';

const maxWidth = '40rem';
const height = '55rem';

export const StyledImage = styled.img`
    max-width: ${maxWidth};
    height: ${height};
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.md};
`;
