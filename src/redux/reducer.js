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
      description: ''
    },
  },
  podcastItems :{
    items: [{}]
  },
  podcastEpisode: {

  }

}

const reducerSearch = (state = initialState.generalResults, action) => {
  switch (action.type) {
    case 'START_SEARCH': {
     return Object.assign({},state, {isFetching: true})
    }

    case 'SEARCH_PODCASTS_LIST': {
      return Object.assign({},state, {data: action.payload});
    }
    case 'END_SEARCH': {
      return  Object.assign({},state, {isFetching: false});
    }
    default:
    
     return state
  }
}

const podcastDetail = (state = initialState.detailedPodcast, action) =>{
  switch (action.type) {
    case 'PD_SEARCH': {
      
      return Object.assign({},state, {isFetching: action.payload});
    }
    case 'GET_PODCAST_DETAIL': {
      return Object.assign({},state, {data: action.payload});
    }
    default:
    
     return state
  }
}

const fetchPodcastItems = (state = initialState.podcastItems, action) =>{
  switch(action.type){
    case 'SET_PODCAST_ITEMS': {
      return  Object.assign({},state, {items: action.payload});
    }
    default:
   
     return state
  }
}
const filterPodcastEpisode = (state = initialState.podcastEpisode, action) =>{
  switch(action.type){
    case 'FILTER_PODCAST_EPISODE': {
      return  Object.assign({},state, {items: action.payload});
    }
    default:
    
     return state
  }
}

const rootReducer = combineReducers({
  generalResults: reducerSearch,
  detailedPodcast : podcastDetail,
  podcastItems: fetchPodcastItems,
  podcastEpisode: filterPodcastEpisode
})

export default rootReducer;