import styled from 'styled-components';
import { StyledLink } from '../../../components/Link';
const maxWidth = '19rem';

export const StyledWrapperCard = styled.div`
    display: flex;
    justify-content: center;

    ${StyledLink} {
        border: 1px solid #c9c9c9;
        width: ${maxWidth};
        margin: ${props => props.theme.margin.sm};
        img {
            width: 100%;
        }
    }
`;
