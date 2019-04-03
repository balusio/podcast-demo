import {combineReducers} from 'redux';
const initialState = {
  generalResults:{
    isFetching: false,
    data : []
  },
  detailedPodcast: {
    isFetching: false,
    data: {
      index: '',  
      id: 0,
      name: '',
      artist: '',
      image: '',
      description: ''
    }
  }
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
    case 'DETAIL_FETCH_FILTER': {
     return {...state, isFetching: action.payload};
    }
    case 'GET_DETAIL_PODCAST': {
      return {...state, data: action.payload};
    }
    default:
     return initialState.detailedPodcast
  }
}
const rootReducer = combineReducers({
  generalResults: reducerSearch,
  detailedPodcast : podcastDetail
})

export default rootReducer;