import axios from 'axios';
const SEARCH_PODCASTS_LIST  = 'SEARCH_PODCASTS_LIST';
const START_SEARCH  = 'START_SEARCH';
const END_SEARCH  = 'START_SEARCH';

export const searchPodcastList = () => dispatch => {
  dispatch({
    type: START_SEARCH,
    payload: true
  })
  axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
  .then(data => {
    const dataFiltered = data.data.feed.entry.map((podcast,index)=>{
      return {
        index: index,  
        id: podcast.id.attributes['im:id'],
        name: podcast.title.label,
        artist: podcast['im:artist'].label,
        image: (podcast['im:image'].length >= 3) ? podcast['im:image'][2].label: podcast['im:image'][0].label,
        description: (podcast.hasOwnProperty('summary')) ? podcast.summary.label : ''
      }
    });
      
    dispatch({
      type: SEARCH_PODCASTS_LIST,
      payload: dataFiltered
    })

  }
  ).then(()=>{
    dispatch({
      type: END_SEARCH,
      payload:false
    })
  })
}


export const filterPodcastResult = (filteredSearchItems) => dispatch => {
  dispatch({
    type: SEARCH_PODCASTS_LIST,
    payload: filteredSearchItems
  });
};