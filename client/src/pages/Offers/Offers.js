import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FilterListIcon from '@material-ui/icons/FilterList';

import { Modal } from 'common/components';
import { AddHelpRequestForm, HelpRequestsList, HelpRequestsFilterForm, ReplyForm } from './components';
import { FlexRow } from './Offers.css';

import { getHelpRequests } from 'state/helpRequest'


const Offers = () => {
  const [isAddRequestModalOpen, setIsAddRequestModalOpen] = useState(false);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [helpType, setHelpType] = useState('request');
  const [isFilterFormOpen, setIsFilterFormOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHelpRequests({}, helpType));
  }, [helpType]);

  return (
    <div>
      <Paper elevation={5} square style={{ marginBottom: '30px' }}>
        <FlexRow>
          <Button
            style={{ 
              flex: 1, 
              backgroundColor: helpType === 'request' ? '#ad1f1f' : 'white',
              color: helpType === 'request' ? 'white' : 'rgba(0, 0, 0, 0.87)'
            }} 
            onClick={() => setHelpType('request')} 
            size='large'
          >
            Help requests
          </Button>
          <Button 
            style={{ 
              flex: 1, 
              backgroundColor: helpType === 'offer' ? '#ad1f1f' : 'white',
              color: helpType === 'offer' ? 'white' : 'rgba(0, 0, 0, 0.87)'
             }} 
            onClick={() => setHelpType('offer')} 
            size='large'
          >
            Help offers
          </Button>
        </FlexRow>
      </Paper>
      <Paper elevation={5} square style={{ marginBottom: '30px' }}>
        <FlexRow>
          <Button 
            onClick={() => setIsAddRequestModalOpen(true)} 
            startIcon={<PostAddIcon />}
            size='large'
          >
            Create new help request
          </Button>
          <Button 
            onClick={() => setIsFilterFormOpen(prev => !prev)} 
            endIcon={<FilterListIcon />}
            size='large'
          >
            {isFilterFormOpen ? 'hide filters' : 'show filters'}
          </Button>
        </FlexRow>
        <Collapse in={isFilterFormOpen}>
          <HelpRequestsFilterForm helpType={helpType}/>
        </Collapse>
      </Paper>
      <HelpRequestsList openReplyModal={() => setIsReplyModalOpen(true)}/>
      <Modal open={isAddRequestModalOpen} onClose={() => setIsAddRequestModalOpen(false)} width={800}>
        <AddHelpRequestForm onSubmit={() => setIsAddRequestModalOpen(false)} helpType={helpType}/>
      </Modal>
      <Modal open={isReplyModalOpen} onClose={() => setIsReplyModalOpen(false)} width={800}>
        <ReplyForm onSubmit={() => setIsReplyModalOpen(false)}/>
      </Modal>
    </div>
  )
}

export default Offers;
