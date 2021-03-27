import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { Home, Offers, Profile } from 'pages';
import { Header, Footer } from 'common/components';


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/offers'>Offers</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
      </nav>
      <Header />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/offers' component={Offers}/>
        <Route path='/profile' component={Profile}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
