import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Offers, Profile, Login, Register } from 'pages';
import { Header, Footer, ProtectedRoute } from 'common/components';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/offers' component={Offers}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        
        <ProtectedRoute path="/profile"
                component={Profile}
                auth={true} // auth.isLoggedIn
              />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
