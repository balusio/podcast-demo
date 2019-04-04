import axios from 'axios';
import jsonp from 'jsonp';
import Parser from 'rss-parser';
import store from './store';
const SEARCH_PODCASTS_LIST  = 'SEARCH_PODCASTS_LIST';
const START_SEARCH  = 'START_SEARCH';
const END_SEARCH  = 'END_SEARCH';
const GET_PODCAST_DETAIL  = 'GET_PODCAST_DETAIL';
const PD_SEARCH  = 'PD_SEARCH';
const SET_PODCAST_ITEMS = 'SET_PODCAST_ITEMS';

export const searchPodcastList = () => dispatch => {
  return new Promise( function(resolve, reject) {
    dispatch({
      type: START_SEARCH,
      payload: true
    })
    
    axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    .then(data => {
      dispatch({
        type: SEARCH_PODCASTS_LIST,
        payload: data.data.feed.entry
      })
      resolve('success')
      dispatch({
        type: END_SEARCH,
        payload:false
      })
    }).catch(e=>{
      throw new Error(e);
    })
  });
  
  
}


export const filterPodcastResult = (filteredSearchItems) => dispatch => {
  dispatch({
    type: SEARCH_PODCASTS_LIST,
    payload: filteredSearchItems
  });
  
};


export const getPodcastElement = (idElement) => dispatch =>{
  const stateDetails = store.getState().generalResults.data.find((elem) =>{
    return elem.id === idElement;
  });
  dispatch({
    type: GET_PODCAST_DETAIL,
    payload: stateDetails
  });

  dispatch({
    type: PD_SEARCH,
    payload: true
  })
  
  return new Promise( function(resolve, reject) {
    jsonp(`https://itunes.apple.com/lookup?id=${idElement}`, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        const parser = new Parser();
        parser.parseURL(`https://cors-anywhere.herokuapp.com/${data.results[0].feedUrl}?format=xml`,function(err,parsed){
          
          dispatch({
            type: SET_PODCAST_ITEMS,
            payload: parsed.items
          })
          resolve('success');
          dispatch({
            type: PD_SEARCH,
            payload: false
          });
        });
      }
    });
  });
};

