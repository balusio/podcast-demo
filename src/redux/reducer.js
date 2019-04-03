import {combineReducers} from 'redux';
const initialState = {
  generalResults:{
    isFetching: false,
    data : []
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

const rootReducer = combineReducers({
  generalResults: reducerSearch
})

export default rootReducer;