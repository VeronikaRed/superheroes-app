import PT from 'prop-types';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { StyledLayout, StyledMain, StyledMainWidthLimiter } from './styles';

export const Layout = ({ children }) => (
    <StyledLayout>
        <Header />

        <StyledMain>
            <StyledMainWidthLimiter>{children}</StyledMainWidthLimiter>
        </StyledMain>

        <Footer />
    </StyledLayout>
);

Layout.propTypes = {
    children: PT.node.isRequired
};
