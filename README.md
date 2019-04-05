# podcast-demo
This is a podcast demo 
## Dependencies ##
* [nvm](https://github.com/creationix/nvm) to lock node version  
* WebPack
  * Webpack dev server
  * TerserPlugin
* react
* Babel
* scss
* [Sierra Scss library](http://sierra-library.github.io/)


## Install ##

be user have NVM installed.
Install the dependencies with `npm install`
run `npm run start` for development

## Application structure ##
Components structure: 
* Layouts (Handle redux comunications)
  * components (Read data from Redux state)

Redux structure:
* generalResults   -> general-results action -> 
  * dispatch : filterPodcastResult searchPodcastList(map and order the api response)
* detailedPodcast  -> podcast-detail action -> 
  * dispatch : getPodcastDetail(filter the state selected podcast), 
* podcastItems     -> podcast-items action ->
  * dispatch : fetchPodcastItems 
* podcastEpisode   -> podcast-episode action ->
  * dispatch : fetchPodcastEpisode 


## Production ##
run `npm run build:prod` for export production build you can start the server on the `index.js` file that serves the public folder


Icons thanks to : (Vectors Market)[https://www.flaticon.com/authors/vectors-market]