import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input, Textarea } from '../../components';
import {
    StyledForm,
    StyledFormGroup,
    StyledFormWrapper,
    StyledWrapper,
    StyledLabel,
    StyledImagesCollection
} from './styles';
import { StyledWrapperButton } from '../../styles';

export const CreateSuperheroPage = ({ onSetServerEvent }) => {
    const { register, handleSubmit } = useForm();

    const newCard = {
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrase: '',
        images: []
    };
    const [arrImages, setArrImages] = useState(newCard.images);

    const history = useHistory();

    const onSubmit = async values => {
        const user = {
            returnSecureToken: true,
            ...values,
            images: arrImages
        };

        const url = `http://localhost:3001/create`;
        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            onSetServerEvent(prev => !prev);
            history.push('/');
        } catch (e) {
            console.error(e);
        }
    };

    const onError = errors => console.log('[errors]', errors);

    const handleAddImage = e => {
        let reader = new FileReader();
        reader.onload = function (event) {
            arrImages.push(event.target.result);
            setArrImages(arrImages.map(i => i));
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const handleCancel = () => {
        history.push('/');
    };

    return (
        <StyledWrapper>
            <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
                    <StyledFormGroup>
                        <StyledLabel>nickname</StyledLabel>
                        <Input
                            type="text"
                            placeholder={newCard.nickname}
                            name={'nickname'}
                            {...register('nickname')}
                        ></Input>
                    </StyledFormGroup>

                    <StyledFormGroup>
                        <StyledLabel>real name</StyledLabel>
                        <Input
                            type="text"
                            placeholder={newCard.real_name}
                            name={'real_name'}
                            {...register('real_name')}
                        ></Input>
                    </StyledFormGroup>

                    <StyledFormGroup>
                        <StyledLabel>origin description</StyledLabel>
                        <Textarea
                            type="text"
                            placeholder={newCard.origin_description}
                            name={'origin_description'}
                            {...register('origin_description')}
                        ></Textarea>
                    </StyledFormGroup>

                    <StyledFormGroup>
                        <StyledLabel>superpowers</StyledLabel>
                        <Textarea
                            type="text"
                            placeholder={newCard.superpowers}
                            name={'superpowers'}
                            {...register('superpowers')}
                        ></Textarea>
                    </StyledFormGroup>

                    <StyledFormGroup>
                        <StyledLabel>catch phrase</StyledLabel>
                        <Textarea
                            type="text"
                            placeholder={newCard.catch_phrase}
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

                    <StyledWrapperButton>
                        <Button type="submit">Submit</Button>
                        <Button onClick={handleCancel}>Cancel</Button>
                    </StyledWrapperButton>
                </StyledForm>
            </StyledFormWrapper>
        </StyledWrapper>
    );
};
