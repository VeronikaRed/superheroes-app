import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../../components';
import { StyledTitle, StyledWrapperButton } from '../../styles';
import {
    StyledDetails,
    StyledDetailsTop,
    StyledImageWrapper,
    StyledInfo,
    StyledInfoWrapper,
    StyledRealName,
    StyledAdditionalPicturesWrapper,
    StyledWrapper
} from './style';
import click from '../../resources/click.png';

export const DetailsCharacterPage = ({ characterCard, onSetServerEvent }) => {
    const history = useHistory();

    const {
        id,
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images
    } = characterCard;

    const [imagesHero, setImagesHero] = useState(images);

    const handleEditProfile = () => {
        history.push(`/editSuperhero/${id}`);
    };

    const handleRemoveImage = image => {
        const res = imagesHero.findIndex(item => item === image);
        imagesHero.splice(res, 1);
        setImagesHero(imagesHero.map(i => i));
    };

    const handleDeletePerson = async () => {
        const url = `http://localhost:3001/delete`;
        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            });
            onSetServerEvent(prev => !prev);
            history.push(`/`);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <StyledWrapper>
            <StyledDetails>
                <StyledDetailsTop>
                    <StyledInfoWrapper>
                        <StyledInfo>
                            <StyledTitle>{nickname}</StyledTitle>
                            <StyledRealName>{real_name}</StyledRealName>
                            <p>{origin_description}</p>
                            <p>Superpowers: {superpowers}</p>
                            <p>Catch phrase: {catch_phrase}</p>
                            <StyledAdditionalPicturesWrapper>
                                {images.length !== 0 &&
                                    imagesHero.map(image => {
                                        return (
                                            <StyledImageWrapper key={image}>
                                                <img
                                                    src={image}
                                                    alt={nickname}
                                                />{' '}
                                                <Button
                                                    onClick={() =>
                                                        handleRemoveImage(image)
                                                    }
                                                >
                                                    <img
                                                        src={click}
                                                        alt="remove"
                                                        title={'remove'}
                                                    />
                                                </Button>
                                            </StyledImageWrapper>
                                        );
                                    })}
                            </StyledAdditionalPicturesWrapper>
                        </StyledInfo>
                        <StyledWrapperButton>
                            <Button onClick={handleEditProfile}>
                                Edit character profile
                            </Button>
                            <Button onClick={handleDeletePerson}>
                                Delete character
                            </Button>
                        </StyledWrapperButton>
                    </StyledInfoWrapper>
                </StyledDetailsTop>
            </StyledDetails>
        </StyledWrapper>
    );
};
