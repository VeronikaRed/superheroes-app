import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const DetailsPageContainer = ({ children }) => {
    const [characterCard, setCharacterCard] = useState();
    const { cardId } = useParams();
    useEffect(() => {
        const url = 'http://localhost:3001/oneOf';
        (async () => {
            try {
                const data = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: cardId })
                });
                const hero = await data.text();
                setCharacterCard(JSON.parse(hero));
            } catch (e) {
                console.error(e);
            }
        })();
        return;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!characterCard) return null;

    return children({ characterCard: characterCard });
};
