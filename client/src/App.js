import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import GlobalStyles, { Page, Main } from './Layout.css';
import { Home, Offers, Profile, Login, Register } from 'pages';
import { Header, Footer, ProtectedRoute } from 'common/components';


function App() {
  const auth = useSelector(state => state.auth);

  return (
    <div>
      <Header isAuthentificated={auth.isLoggedIn} />
      <Page elevation={10}>
        <Main>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/offers' component={Offers}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <ProtectedRoute 
              path="/profile"
              component={Profile}
              auth={auth.isLoggedIn} // auth.isLoggedIn
             />
          </Switch>
        </Main>
        <Footer />
      </Page>
    </div>
  );
}

export default App;
