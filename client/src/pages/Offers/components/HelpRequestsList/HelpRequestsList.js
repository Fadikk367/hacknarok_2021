import React from 'react'
import { useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { RequestsSection, CardHeader } from './HelpRequestsList.css';

  
const HelpRequestsList = () => {
  const helpRequests = useSelector(state => state.helpRequest.requests);
  
  return (
    <RequestsSection>
      {helpRequests.map(request => (
        <Card elevation={3} square>
          <CardContent>
            <CardHeader gutterBottom variant="h5" component="h2" >
              {request.title}
              <span>{request.date}</span>
            </CardHeader>
            <Typography variant="body2" color="textSecondary" component="p">
              {request.description}
            </Typography>
          </CardContent>
        <CardActions>
          <Button color="primary">
            Reply
          </Button>
          <Button color="primary">
            Show profile
          </Button>
        </CardActions>
      </Card>
      ))}
    </RequestsSection>
  )
}

export default HelpRequestsList
