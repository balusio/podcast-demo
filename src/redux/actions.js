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


