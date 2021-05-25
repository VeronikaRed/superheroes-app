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
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LayoutContainer } from './containers/LayoutContainer/LayoutContainer';

export const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyles />
                <LayoutContainer>
                    {({ cards, onSetServerEvent, ...other }) => (
                        <Layout>
                            <Switch>
                                <Route path="/" exact>
                                    <HomePage heroes={cards} />
                                </Route>

                                <Route path="/character/:cardId">
                                    <DetailsCharacterPage heroes={cards} />
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
