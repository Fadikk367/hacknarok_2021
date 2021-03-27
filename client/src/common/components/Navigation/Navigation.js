import React from 'react';

import ExitToAppIcon from '@material-ui/icons/ExitToApp'; 
import { NavList, Link, LogoutButton } from './navigation.css';
import { logout } from 'state/auth/authActions';

const Navigation = ({ isAuthentificated }) => {
  const publicNavItems = [
    <li key={1}><Link to='/'>Home</Link></li>,
    <li key={2}><Link to='/login'>Login</Link></li>,
  ]

  const privateNavItems = [
    <li key={1}><Link to='/'>Home</Link></li>,
    <li key={4}><Link to='/offers'>Offers</Link></li>,
    <li key={5}><Link to='/profile'>Profile</Link></li>,
    <li key={3}>
      <LogoutButton 
        endIcon={<ExitToAppIcon htmlColor='white'/>}
        onClick={logout}
      >
        Logout
      </LogoutButton>
    </li>,
  ]

  const navItems = isAuthentificated ? privateNavItems : publicNavItems;

  return (
    <NavList>
      {navItems}
    </NavList>
  )
}

export default Navigation;