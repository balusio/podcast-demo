import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import store from '../../redux/store';
import { connect } from 'react-redux';
import './podcast-list.scss';
import {fetchPodcastEpisode} from '../../redux/actions/podcast-episode';

class PodcastList extends Component {
  constructor(props) {
    super(props);
    this.redirectToPodcastEpisode = this.redirectToPodcastEpisode.bind(this);
  }
  redirectToPodcastEpisode(guid){
    this.props.fetchPodcastEpisode(guid).then(()=>{
      this.props.history.push(`${this.props.match.url}/episode/${guid}`)
    })
    
   
  }
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('/');
  }
  timeToHours(time){
    var sec_num = parseInt(time, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
  }  
  render(){
    console.log(store.getState());
    return(
      <div>
        <ul className="box-shadow-container mb-big p-big">
          <h3>Episodes: <strong>{this.props.items.length}</strong></h3>
        </ul>
        <table className="box-shadow-container mb-big p-big table table--responsive podcast-list">
          <thead>
            <tr className="text-small">
              <th>title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.items.map((podcast,index) =>{
                
                return(
                  //<Link to={`${this.props.match.url}/episode/${podcast.guid}`}>
                  <tr key={index} onClick={ ()=> this.redirectToPodcastEpisode(podcast.guid)}> 
                  
                    <td data-th="title">{podcast.title}</td>
                    <td data-th="Date">{this.formatDate(podcast.pubDate)}</td>
                    <td data-th="Duration">{this.timeToHours(podcast.itunes.duration)}</td>
                  </tr>
                  //</Link>
                );
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

PodcastList.propTypes ={
  items: PropTypes.array.isRequired,
  fetchPodcastEpisode: PropTypes.func.isRequired
 
}

export default connect(null,{fetchPodcastEpisode})(PodcastList);