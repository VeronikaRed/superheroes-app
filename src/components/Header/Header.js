import { StyledHeader } from './styles';
import { useHistory } from 'react-router-dom';

export const Header = () => {
    const history = useHistory();
    const handleMoveHomePage = () => {
        history.push('/');
    };
    return (
        <StyledHeader>
            <h1 onClick={handleMoveHomePage}>SUPERHEROES</h1>
        </StyledHeader>
    );
};
