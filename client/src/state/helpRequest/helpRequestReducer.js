import { 
  GET_HELP_REQUESTS_SECCESS,
  ADD_HELP_REQUEST_SECCESS,
  GET_CATEGORIES_SECCESS,
} from './helpRequestActions';


const initialState = {
  categories: [],
  requests: [{
    _id: 1,
    title: 'Fizyka 1 LO',
    description: 'lorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhv. lorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhv.lorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhv. dsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhvlorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhds',
    category: 'programming',
    tags: ['it', 'js', 'react'],
    date: '2021-04-21'
  }, {
    _id: 2,
    title: 'Fizyka 2 LO',
    description: 'lorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhvlorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhv. dsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhvlorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhds',
    category: 'programming',
    tags: ['it', 'js', 'react'],
    date: '2021-04-22'
  }, {
    _id: 3,
    title: 'Fizyka 3 LO',
    description: 'lorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhvlorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhv. dfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhvlorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhv. ',
    category: 'programming',
    tags: ['it', 'js', 'react'],
    date: '2021-04-24'
  }, {
    _id: 4,
    title: 'dupa4',
    description: 'lorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhvlorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhv. dfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhvlorem dsfvns vhdsfbvjdfvsdj hvdsfvhdsfbvfd vhdsfv fdsjhvbdfsv jhdsfbv dsfjhv. ',
    category: 'programming',
    tags: ['it', 'js', 'react'],
    date: '2021-04-21'
  }],
}

function helpRequestReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HELP_REQUESTS_SECCESS: {
      const helpRequests = action.payload;
      console.log(helpRequests);
      return {
        ...state,
        requests: [...helpRequests, ...initialState.requests]
      }
    }
    case ADD_HELP_REQUEST_SECCESS: {
      const addedHelpRequest = action.payload;
      
      return {
        ...state,
        requests: [addedHelpRequest, ...state.requests]
      }
    }
    case GET_CATEGORIES_SECCESS: {
      const categories = action.payload;
      
      return {
        ...state,
        categories,
      }
    }
    default:
      return state;
  }
}

export default helpRequestReducer;