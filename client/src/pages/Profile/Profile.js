import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { ProfileWrapper } from './profile.css';

// skills would be pulled from the databes in the future
const Profile = () => {
  const { id } = useParams();

  
  const auth = useSelector(state => state.auth)
  const requests = useSelector(state => state.helpRequest.requests)
  const userData = requests.find(req => id === req._id);

  console.log(userData.author);

  return (
    <ProfileWrapper>
      <AccountCircleIcon style={{ fontSize: 200, color:"darkgray" }}/>
      <br/>
      {userData.author.firstName + " " + userData.author.lastName}
      <br/><br/>
      {auth.isLoggedIn ? userData.author.login : null}    
      <br/><hr/>Opis<br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium, molestias, modi odio unde assumenda esse aut, quas sapiente aliquid dolor reiciendis qui ipsum? Pariatur delectus praesentium amet natus ullam!
    </ProfileWrapper>
  )
}

export default Profile;