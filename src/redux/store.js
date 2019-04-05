import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import {getDataFromApi} from './cache-middleware';
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk,getDataFromApi),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) 
  
);
export default store;