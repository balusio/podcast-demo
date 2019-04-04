import React, { Component } from "react";
import {getPodcastElement} from '../../redux/actions.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './podcast-view.scss';


class PodcastView extends Component {
  constructor(props){
    super(props);
    
  }
  componentWillMount(){
    const idPodcast = this.props.match.params.podcastId;

    this.props.getPodcastElement(idPodcast).then(()=>{
      
      console.log(this.props.podcastElement);
    });
  }
  createMarkup(elem) {
    var div = document.createElement('div');
    div.innerHTML = elem;
    var scripts = div.getElementsByTagName('script');
    var i = scripts.length;
    while (i--) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
    return {__html: div.innerHTML};
  }
  render(){
    return (
      <div className="container-podcast-detail">
        <aside dangerouslySetInnerHTML={this.createMarkup(this.props.podcastElement.data.description)}>
          
        </aside>
      </div>
    )
  }
}

PodcastView.propTypes ={
  getPodcastElement: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  podcastElement: state.detailedPodcast
});



export default connect(mapStateToProps,{getPodcastElement})(PodcastView);