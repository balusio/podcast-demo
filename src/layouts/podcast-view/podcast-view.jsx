import React, { Component } from "react";
import {searchPodcastList,filterPodcastResult} from '../../redux/actions.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './podcast-view.scss';


class PodcastView extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="container-podcast-detail">
        <aside></aside>
      </div>
    )
  }
}

PodcastView.propTypes ={
  searchPodcastList : PropTypes.func.isRequired,
  filterPodcastResult: PropTypes.func.isRequired,
  searchResults: PropTypes.array
}

const mapStateToProps = (state) => ({
  searchResults: state.generalResults.data
});



export default connect(mapStateToProps,{searchPodcastList, filterPodcastResult})(PodcastView);