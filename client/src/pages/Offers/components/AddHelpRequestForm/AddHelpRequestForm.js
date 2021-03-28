import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, FormRow } from './AddHelpRequestForm.css';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { addHelpRequest } from 'state/helpRequest';


const AddHelpRequestForm = ({ onSubmit }) => {
  const categories = useSelector(state => state.helpRequest.categories);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(addHelpRequest({
      title, 
      description, 
      tags: tags.split(','), 
      category: categories.findIndex(cat => cat === category), 
      date: new Date().toISOString().substring(0, 10)
    }));

    onSubmit();
  }

  return (
    <Paper elevation={5} square style={{ maxWidth: '800px' }}>
      <Form onSubmit={handleFormSubmit}>
        <Typography variant='h5'>Create post requesting for help:</Typography>
        <FormRow>
          <TextField type="text" label='title' value={title} onChange={e => setTitle(e.target.value)}/>
          <FormControl>
            <InputLabel id="category-label">Category</InputLabel>
            <Select 
              labelId="category-label" 
              value={category} 
              onChange={e => setCategory(e.target.value)}
              style={{ minWidth: '200px' }}
            >
              {categories.map(category => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField type="text" label='tags' value={tags} onChange={e => setTags(e.target.value)}/>
        </FormRow>
        <TextField 
          multiline 
          rows={4} 
          rowsMax={4} 
          label='description' 
          value={description} 
          onChange={e => setDescription(e.target.value)}
        />
        <Button type='submit'>SUBMIT</Button>
      </Form>
    </Paper>
  )
}

export default AddHelpRequestForm;
