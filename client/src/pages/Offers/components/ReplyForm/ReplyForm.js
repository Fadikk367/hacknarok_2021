import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, FormRow } from './ReplyForm.css';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { sendMessage } from 'state/helpRequest';


const ReplyForm = ({ onSubmit }) => {
  const platforms = ['MS Teams', 'Skype', 'Discord', 'Zoom'];
  const reply = useSelector(state => state.helpRequest.reply);
  const [comment, setComment] = useState('');
  const [platform, setPlatform] = useState('');
  const [date, setDate] = useState('2021-05-24T10:30');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendMessage({ 
      comment, 
      date, 
      platform, 
      helpOfferOid: reply.requestId, 
      hour: new Date().toISOString().substring(11, 19)
    }));
    onSubmit();
  }

  return (
    <Paper elevation={5} square style={{ maxWidth: '800px' }}>
      <Form onSubmit={handleSubmit}>
        <Typography variant='h5'>Create post requesting for help:</Typography>
        <FormRow>
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1', gap: '5px' }}>
            <TextField type="datetime-local" label='Date' defaultValue={date} value={date} onChange={e => setDate(e.target.value)}/>
            <FormControl>
              <InputLabel id="category-label">Platform</InputLabel>
              <Select 
                MenuProps={{
                  disableScrollLock: true
                }}
                labelId="category-label" 
                value={platform} 
                onChange={e => setPlatform(e.target.value)}
                style={{ minWidth: '200px' }}
              >
                {platforms.map(platform => (
                  <MenuItem value={platform} key={platform}>{platform}</MenuItem>
                ))}
              </Select>
          </FormControl>
          </div>
          <TextField 
            style={{ flex: '4' }}
            multiline 
            rows={4} 
            rowsMax={4} 
            label='Message' 
            value={comment} 
            onChange={e => setComment(e.target.value)}
          />
        </FormRow>
        <Button type='submit'>SEND MESSGAE</Button>
      </Form>
    </Paper>
  )
}

export default ReplyForm;