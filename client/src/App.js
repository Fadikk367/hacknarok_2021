import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { Page, Main } from './Layout.css';
import { Offers, Profile, MyProfile, Login, Register } from 'pages';
import { Header, Footer, ProtectedRoute } from 'common/components';

import { getRequestCategoires } from 'state/helpRequest'


function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  
  useEffect(() => {
    dispatch(getRequestCategoires());
  }, [dispatch])

  
  return (
    <div>
      <Header isAuthentificated={auth.isLoggedIn} />
      <Page elevation={10}>
        <Main>
          <Switch>
            <Route path='/offers' component={Offers}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/profile/:id' exact component={Profile}/>
            <ProtectedRoute 
              path='/account'
              component={MyProfile}
              auth={auth.isLoggedIn} // auth.isLoggedIn
            />
            <Route component={Offers} />
          </Switch>
        </Main>
        <Footer />
      </Page>
    </div>
  );
}

export default App;
