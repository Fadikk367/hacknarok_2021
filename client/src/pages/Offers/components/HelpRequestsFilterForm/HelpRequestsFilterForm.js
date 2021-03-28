import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { Form } from './HelpRequestsFilterForm.css';

import { getHelpRequests } from 'state/helpRequest';


const HelpRequestsFilterForm = ({ helpType }) => {
  const categories = useSelector(state => state.helpRequest.categories);
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getHelpRequests({ 
      category: categories.findIndex(cat => cat === category) + 1, 
      tags: tags.split(',') 
    }, 
    helpType
    ));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField type="text" label='seach' value={searchText} onChange={e => setSearchText(e.target.value)}/>
      <FormControl>
        <InputLabel id="category-label">Category</InputLabel>
        <Select 
          MenuProps={{
            disableScrollLock: true
          }}
          labelId="category-label" 
          value={category} 
          onChange={e => setCategory(e.target.value)}
          style={{ minWidth: '200px' }}
        >
          {categories.map(category => (
            <MenuItem value={category} key={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField type="text" label='tags' value={tags} onChange={e => setTags(e.target.value)}/>
      <Button type='submit' endIcon={<ArrowRightIcon />}>Apply</Button>
    </Form>
  )
}

export default HelpRequestsFilterForm;
