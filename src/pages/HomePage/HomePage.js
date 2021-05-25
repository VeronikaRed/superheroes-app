import fakeImg from '../../resources/download.jpg';

import poster from './styles/crop.jpg';
import {
    StyledHomePageWrapper,
    StyledImageWrapper,
    StyledWrapperCard
} from './styles';

import { useState } from 'react';
import { Pagination } from './Pagination';
import { Button, Link } from '../../components';
import { StyledTitle } from '../../styles';
import { useHistory } from 'react-router-dom';

export const HomePage = ({ heroes }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(5);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = heroes.slice(indexOfFirstCard, indexOfLastCard);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const history = useHistory();
    const handleChangePage = () => {
        history.push('/createSuperhero');
    };

    return (
        <StyledHomePageWrapper>
            <p>Cool picture from last vacation</p>
            <StyledImageWrapper>
                <img src={poster} alt="heroes" />
            </StyledImageWrapper>
            <StyledTitle>Who we have here:</StyledTitle>

            <StyledWrapperCard>
                {currentCards.map(card => {
                    return (
                        <Link
                            key={card.id}
                            to={`/character/${card.id}`}
                            className="list-group-item"
                        >
                            {card.nickname}
                            <img
                                src={`${
                                    !!card.images[0] ? card.images[0] : fakeImg
                                }`}
                                alt="heroes"
                            />
                        </Link>
                    );
                })}
            </StyledWrapperCard>

            <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={heroes.length}
                paginate={paginate}
            />
            <Button onClick={handleChangePage}>add new hero</Button>
        </StyledHomePageWrapper>
    );
};
