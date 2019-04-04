import {combineReducers} from 'redux';
const initialState = {
  generalResults:{
    isFetching: false,
    data : []
  },
  detailedPodcast: {
    isFetching: false,
    data: {
      id: 0,
      index: '',  
      name: '',
      artist: '',
      image: '',
      description: '',
      items:[]
    }
  },

}

const reducerSearch = (state = initialState.generalResults, action) => {
  switch (action.type) {
    case 'START_SEARCH': {
     return {...state, isFetching: true};
    }

    case 'SEARCH_PODCASTS_LIST': {
      return {...state, data: action.payload};
    }
    case 'END_SEARCH': {
      return {...state, isFetching: false};
    }
    default:
     return initialState.generalResults
  }
}

const podcastDetail = (state = initialState.detailedPodcast, action) =>{
  switch (action.type) {
    case 'PD_SEARCH': {
      return {...state, isFetching: action.payload};
    }
    case 'GET_PODCAST_DETAIL': {
      return {...state, data: action.payload};
    }


    default:
     return initialState.detailedPodcast
  }
}

const itemsPodcast = (state = initialState.itemsPodcast, action) =>{
  switch(action.type){
    case 'SET_PODCAST_ITEMS': {
      console.log('LLEGUE');
      return {...state, itemsPodcast: action.payload};
    }
    default:
     return initialState.itemsPodcast
  }
};

const rootReducer = combineReducers({
  generalResults: reducerSearch,
  detailedPodcast : podcastDetail,
  itemsPodcast : itemsPodcast
})

export default rootReducer;