export const markupEscape = function(elem) {
  var div = document.createElement('div');
  div.innerHTML = elem;
  var scripts = div.getElementsByTagName('script');
  var i = scripts.length;
  while (i--) {
    scripts[i].parentNode.removeChild(scripts[i]);
  }
  return {__html: div.innerHTML};
}