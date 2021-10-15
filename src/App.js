import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Views/Home';
import Contact from './Views/Contact';
import Faqs from './Views/Faqs';
import Profile from './Views/Profile';
import GlobalStyles from './GlobalStyles';
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <Header user={user} isAuthenticated={isAuthenticated} isLoading={isLoading} />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/faqs" component={Faqs}></Route>
        <Route exact path="/profile" render={() => <Profile
          user={user}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
          />}>
        </Route>
      </Switch>
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
