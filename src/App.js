import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles';
import { darkTheme } from './themes';
import { Layout } from './components';
import {
    CreateSuperheroPage,
    DetailsCharacterPage,
    EditSuperheroPage,
    HomePage
} from './pages';
import { DetailsPageContainer, LayoutContainer } from './containers';

export const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyles />
                <LayoutContainer>
                    {({ cards, onSetServerEvent }) => (
                        <Layout>
                            <Switch>
                                <Route path="/" exact>
                                    <HomePage heroes={cards} />
                                </Route>

                                <Route path="/character/:cardId">
                                    <DetailsPageContainer>
                                        {({ characterCard }) => (
                                            <DetailsCharacterPage
                                                characterCard={characterCard}
                                                onSetServerEvent={
                                                    onSetServerEvent
                                                }
                                            />
                                        )}
                                    </DetailsPageContainer>
                                </Route>

                                <Route path={['/editSuperhero/:cardId']}>
                                    <EditSuperheroPage
                                        heroes={cards}
                                        onSetServerEvent={onSetServerEvent}
                                    />
                                </Route>

                                <Route path={['/createSuperhero']}>
                                    <CreateSuperheroPage
                                        onSetServerEvent={onSetServerEvent}
                                    />
                                </Route>
                            </Switch>
                        </Layout>
                    )}
                </LayoutContainer>
            </ThemeProvider>
        </BrowserRouter>
    );
};
