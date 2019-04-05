import jsonp from 'jsonp';
import Parser from 'rss-parser';
const PD_SEARCH  = 'PD_SEARCH';
const SET_PODCAST_ITEMS = 'SET_PODCAST_ITEMS';



export const fetchPodcastItems = (idElement) => dispatch =>{
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
          
        });
      }
    });
  });
};


