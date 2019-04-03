import React, { Component } from "react";
import {searchPodcastList} from '../../redux/actions.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './search-layout.scss';
import ComponentSummary from '../../components/podcast-summary/podcast-summary.jsx';
class SearchLayout extends Component {
  constructor() {
    super();
  }
  componentWillMount(){
    this.props.searchPodcastList();
  } 
  componentDidMount(){

  }
  render() {

    return(
      <div className="container">
        <div className="wrapper">
          <div className="row">
            {this.props.searchResults.map((podcast,index)=>{       
              return {
                index: index,  
                id: podcast.id.attributes['im:id'],
                name: podcast.title.label,
                artist: podcast['im:artist'].label,
                image: (podcast['im:image'].length >= 3) ? podcast['im:image'][2].label: podcast['im:image'][0].label,
                description: (podcast.hasOwnProperty('summary')) ? podcast.summary.label : ''
              }
              
            })}
          </div>
        </div>
      </div>
    );
  }
}

SearchLayout.propTypes ={
  searchPodcastList : PropTypes.func.isRequired,
  searchResults: PropTypes.array
}

const mapStateToProps = (state) => ({
  searchResults: state.generalResults.data
});

export default connect(mapStateToProps,{searchPodcastList})(SearchLayout);