import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Button, Input, Textarea } from '../../components';
import {
    StyledForm,
    StyledFormGroup,
    StyledFormWrapper,
    StyledWrapper,
    StyledLabel,
    StyledImagesCollection
} from './styles';

export const EditSuperheroPage = ({ heroes, onSetServerEvent }) => {
    const history = useHistory();
    const { cardId } = useParams();
    let characterCard = heroes.find(item => item.id === cardId);

    const {
        id,
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images
    } = characterCard;

    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: id,
            nickname: nickname,
            real_name: real_name,
            origin_description: origin_description,
            superpowers: superpowers,
            catch_phrase: catch_phrase,
            images: images
        }
    });

    const [arrImages, setArrImages] = useState(images);
    const handleAddImage = e => {
        let reader = new FileReader();
        reader.onload = function (event) {
            arrImages.push(event.target.result);
            setArrImages(arrImages.map(i => i));
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const onSubmit = async values => {
        const user = {
            id: id,
            ...values,
            returnSecureToken: true,
            images: arrImages
        };

        const url = `http://localhost:3001/edit`;
        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            onSetServerEvent(prev => !prev);
            history.push(`/character/${id}`);
        } catch (e) {
            console.error(e);
        }
    };

    const onError = errors => console.log('[errors]', errors);

    const handleDeletePerson = async () => {
        const url = `http://localhost:3001/delete`;
        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: cardId })
            });
            onSetServerEvent(prev => !prev);
            history.push(`/`);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <StyledWrapper>
            <StyledFormWrapper>
                <StyledForm
                    enctype="application/json"
                    onSubmit={handleSubmit(onSubmit, onError)}
                >
                    <StyledFormGroup>
                        <StyledLabel>nickname</StyledLabel>
                        <Input
                            placeholder={nickname}
                            type="text"
                            name={'nickname'}
                            {...register('nickname')}
                        ></Input>
                    </StyledFormGroup>

                    <StyledFormGroup>
                        <StyledLabel>real name</StyledLabel>
                        <Input
                            type="text"
                            placeholder={real_name}
                            name={'real_name'}
                            {...register('real_name')}
                        ></Input>
                    </StyledFormGroup>

                    <StyledFormGroup>
                        <StyledLabel>origin description</StyledLabel>
                        <Textarea
                            type="text"
                            placeholder={origin_description}
                            name={'origin_description'}
                            {...register('origin_description')}
                        ></Textarea>
                    </StyledFormGroup>

                    <StyledFormGroup>
                        <StyledLabel>superpowers</StyledLabel>
                        <Textarea
                            type="text"
                            placeholder={superpowers}
                            name={'superpowers'}
                            {...register('superpowers')}
                        ></Textarea>
                    </StyledFormGroup>

                    <StyledFormGroup>
                        <StyledLabel>catch phrase</StyledLabel>
                        <Textarea
                            type="text"
                            placeholder={catch_phrase}
                            name={'catch_phrase'}
                            {...register('catch_phrase')}
                        ></Textarea>
                    </StyledFormGroup>

                    <StyledFormGroup>
                        <StyledLabel>add new picture</StyledLabel>
                        <Input
                            type="file"
                            name={'images'}
                            accept=".png, .jpg, .jpeg"
                            onChange={event => handleAddImage(event)}
                        ></Input>
                        <StyledImagesCollection>
                            {arrImages.map(i => (
                                <img key={i} src={i} alt="file" />
                            ))}
                        </StyledImagesCollection>
                    </StyledFormGroup>

                    <Button type="submit">Submit</Button>
                </StyledForm>
                <Button onClick={handleDeletePerson}>Delete character</Button>
            </StyledFormWrapper>
        </StyledWrapper>
    );
};
