import styled from 'styled-components/macro';

export const StyledAdditionalPicturesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${props => props.theme.margin.md};
    justify-content: center;

    img {
        max-height: 25rem;
        margin: ${props => props.theme.margin.sm};
        border-radius: ${props => props.theme.borderRadius.md};
    }
    &:not(:last-child) {
        margin-right: ${props => props.theme.margin.md};
    }
`;
