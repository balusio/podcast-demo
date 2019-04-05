import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import store from '../../redux/store';
import './podcast-detail.scss';
import {markupEscape} from '../../utils';
class PodcastDetail extends Component {
  constructor(props) {
    super(props);
    this.markupEscape = markupEscape,
    this.errorFormat = this.errorFormat.bind(this);
  }
  errorFormat(){
    return(
      <video controls>
     { console.log(this.props.episode.enclosure.url)}
        <source src="https://play.podtrac.com/npr-510292/ondemand.npr.org/npr-mp4/npr/ascvid/2019/04/20190402_ascvid_courtneypodcast.mp4" type={this.props.episode.enclosure.type} />
      </video>
    );
  }
  render(){
    console.log(this.props);
    return(
      <div className="box-shadow-container p-big">
        <h1>{this.props.episode.title}</h1>
        <div dangerouslySetInnerHTML={this.markupEscape(this.props.episode.contentSnippet)}></div>
        { ( this.props.episode.enclosure.type ==='video/mpeg') ?  this.errorFormat():
        <audio controls="controls">
          Your browser does not support the &lt;audio&gt; tag. 
          <source src={this.props.episode.enclosure.url} type={this.props.episode.enclosure.type}/>
        </audio> 
        }
        
      </div>
    )
  }
}



export default PodcastDetail;