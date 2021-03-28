import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Rating from '@material-ui/lab/Rating';

import { ProfileWrapper, Skill } from './profile.css';

// skills would be pulled from the databes in the future
const Profile = () => {
  return (
    <ProfileWrapper>
      <AccountCircleIcon style={{ fontSize: 200, color:"darkgray" }}/>
      <br/>
      { "imie i nazwisko" }
      <br/><hr/>            
      <Skill>
        Maths 
        <Rating 
          value={parseFloat("3.5")}
          readOnly
          precision={0.5}
          size="large" 
        />
      </Skill>
      <Skill>
        Programming 
        <Rating 
          value={parseFloat("2.5")}
          readOnly
          precision={0.5}
          size="large" 
        />
      </Skill>
      <Skill>
        Biology 
        <Rating 
          value={parseFloat("5.0")}
          readOnly
          precision={0.5}
          size="large" 
        />
      </Skill>

      <br/><hr/>Opis<br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium, molestias, modi odio unde assumenda esse aut, quas sapiente aliquid dolor reiciendis qui ipsum? Pariatur delectus praesentium amet natus ullam!
      
      <br/><hr/>Requests<br/>
      <br/><hr/>Offers<br/>
    </ProfileWrapper>
  )
}

export default Profile;