import axios from 'axios';
const SEARCH_PODCASTS_LIST  = 'SEARCH_PODCASTS_LIST';
const START_SEARCH  = 'START_SEARCH';
const END_SEARCH  = 'END_SEARCH';

export const searchPodcastList = () => dispatch => {
  return new Promise( function(resolve, reject) {
    dispatch({
      type: START_SEARCH,
      payload: true
    })
    let date = new Date();
    date.setDate(date.getDate() - 1);
    axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',{
      'If-Modified-Since' : date
    })
    .then(data => {
      window.localStorage.setItem('generalResult', data.data.feed.entry)
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