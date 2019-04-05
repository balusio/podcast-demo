
const createTimeCookie =() =>{
  var date = new Date();
  date.setTime(date.getTime()+(24*60*60*1000));
  var expires = "; expires="+date.toGMTString();
  document.cookie = "expires=true"+expires+"; path=/";
}
const getCookie = (name) => {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}

const checkCookie = ()=> {
  var username = getCookie("username");
  return (username != "") ? true : false;
  
};
export const getDataFromApi = (store) =>(next) =>(action) =>{
  
  
  if(action.type === 'SEARCH_PODCASTS_LIST'){
    let test = getCookie('expires');
    if(test){
      let serachResults = window.localStorage.getItem('serachResults');
      console.log(serachResults);
      //next({type: action.type, payload: generalResult})
      next(action);
    }  else{
      console.log('errog');
      console.log(action.payload);
      next(action);
    }
  }
  next(action);


}


