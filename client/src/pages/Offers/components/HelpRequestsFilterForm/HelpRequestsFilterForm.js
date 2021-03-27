import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { Form } from './HelpRequestsFilterForm.css';


const HelpRequestsFilterForm = () => {
  const categories = ['programming', 'biology', 'phisics'];
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const dispatch = useDispatch();

  const handleApplyFilters = e => {
    e.preventDefault();
    console.log({searchText, category, tags});
    // dispatch();
  }

  return (
    <Form onChange={handleApplyFilters}>
      <TextField type="text" label='seach' value={searchText} onChange={e => setSearchText(e.target.value)}/>
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
    </Form>
  )
}

export default HelpRequestsFilterForm;
