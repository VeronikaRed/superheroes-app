import { useState, useEffect } from 'react';

export const LayoutContainer = ({ children }) => {
    const [fetchData, setFetchData] = useState([]);
    const [serverEvent, setServerEvent] = useState(true);
    const fetchUrl = 'http://localhost:3001/';

    useEffect(() => {
        (async () => {
            try {
                await fetch(fetchUrl)
                    .then(response => {
                        return response.text();
                    })
                    .then(data => {
                        setFetchData(JSON.parse(data));
                    });
            } catch (e) {
                console.error(e);
            }
        })();
    }, [serverEvent]);

    return children({ cards: fetchData, onSetServerEvent: setServerEvent });
};
