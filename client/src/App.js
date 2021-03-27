import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { Home, Offers, Profile } from 'pages';
import { Header, Footer } from 'common/components';
import GlobalStyles, { Page, Main } from './Layout.css';


function App() {
  return (
    <div>
      <GlobalStyles />
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/offers'>Offers</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
      </nav>
      <Header />
      <Page elevation={10}>
        <Main>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/offers' component={Offers}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
        </Main>
        <Footer />
      </Page>
    </div>
  );
}

export default App;
