import React from 'react';
import { useSelector } from 'react-redux';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Rating from '@material-ui/lab/Rating';

import { ProfileWrapper, Skill } from './myProfile.css';

// skills would be pulled from the databes in the future
const MyProfile = () => {
  const auth = useSelector(state => state.auth);
  const categories = useSelector(state => state.helpRequest.categories)

  let skills = [];
  if(auth.skills){
    
    for (const [k,v] of Object.entries(auth.skills)) {
      skills.push( 
        <Skill>
          {categories[k-1]}
          <Rating 
            value={parseFloat(v)}
            readOnly
            precision={0.5}
            size="large" 
          />
        </Skill>
    )}
  }


  return (
    <ProfileWrapper>
      <AccountCircleIcon style={{ fontSize: 200, color:"darkgray" }}/>
      <br/>
      { auth.firstName + " " + auth.lastName }
      <br/><br/>
      { auth.login }
      <hr/>        
      {skills}
      <br/><hr/>Opis<br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium, molestias, modi odio unde assumenda esse aut, quas sapiente aliquid dolor reiciendis qui ipsum? Pariatur delectus praesentium amet natus ullam!
      
      <br/><hr/>Requests<br/>
      <br/><hr/>Offers<br/>
    </ProfileWrapper>
  )
}

export default MyProfile;