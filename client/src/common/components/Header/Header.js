import React from 'react'
import { Navigation } from 'common/components';
import { HeaderContent, CustomHeader } from './header.css';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';


const Header = () => {
  return (
    <CustomHeader>
      <HeaderContent>
        <ContactSupportIcon />
        <Navigation isAuthentificated={true}/>
      </HeaderContent>
    </CustomHeader>
  )
}

export default Header;
