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

export const searchPodcastResults = (stringFilter) => dispatch => {
  console.log(stringFilter + ' ACTION HANDLEDD');
  const filterSearch = store.getState();
  // dispatch({
  //   type: SEARCH_PODCASTS_LIST,
  //   payload: filteredSearchItems
  // });
  
};
