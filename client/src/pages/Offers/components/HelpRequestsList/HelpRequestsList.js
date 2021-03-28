import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { RequestsSection, CardHeader } from './HelpRequestsList.css';

import { replyStart } from 'state/helpRequest'

  
const HelpRequestsList = ({ openReplyModal }) => {
  const helpRequests = useSelector(state => state.helpRequest.requests);
  const categories = useSelector(state => state.helpRequest.categories);
  const dispatch = useDispatch();

  const handleReplyClick = (author, requestId) => {
    dispatch(replyStart(author, requestId));
    openReplyModal();
  }
  
  return (
    <RequestsSection>
      {helpRequests.map(request => (
        <Card elevation={3} square key={request._id}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <CardHeader gutterBottom variant="h5" component="h2" >
              {request.title}
              <span>{request.date}</span>
            </CardHeader>
            <Typography variant="body2" color="textSecondary" component="p">
              {request.description}
            </Typography>
            <Grid container>
              <Grid item xs={1}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Category:
                </Typography>
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body2" color="textSecondary" component="p">
                  {categories[request.category]}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={1}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Tags: 
                </Typography>
              </Grid>
              <Grid item xs={11} style={{ display: 'flex', gap: '5px' }}>{request.tags.map(tag => (<Chip key={tag} label={tag}/>))}</Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button color="primary" onClick={() => handleReplyClick(request.author, request._id)}>
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
