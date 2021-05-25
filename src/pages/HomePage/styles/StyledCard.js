import styled from 'styled-components';

const maxWidth = '23rem';

export const StyledCard = styled.div`
    li {
        width: ${maxWidth};
        margin: ${props => props.theme.margin.sm};
    }
`;
