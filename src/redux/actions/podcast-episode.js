
import store from '../store';
const FILTER_PODCAST_EPISODE  = 'FILTER_PODCAST_EPISODE';

export const fetchPodcastEpisode = (episodeId) => dispatch =>{
  return new Promise( function(resolve, reject) {
    const episodeElem = store.getState().podcastItems.items.find((elem) =>{
      return elem.guid === episodeId;
    });
    dispatch({
      type: FILTER_PODCAST_EPISODE,
      payload: episodeElem
    });
    resolve('success');
  });

  
};