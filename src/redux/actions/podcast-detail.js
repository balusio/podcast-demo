
import store from '../store';
const GET_PODCAST_DETAIL  = 'GET_PODCAST_DETAIL';

export const getPodcastDetail = (idElement) => dispatch =>{
  return new Promise( function(resolve, reject) {
    const stateDetails = store.getState().generalResults.data.find((elem) =>{
      return elem.id === idElement;
    });
    dispatch({
      type: GET_PODCAST_DETAIL,
      payload: stateDetails
    });
    resolve(stateDetails);
  });

  
};


