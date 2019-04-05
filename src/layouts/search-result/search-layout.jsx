import React, { Component } from "react";
import {searchPodcastList,filterPodcastResult} from '../../redux/actions/general-results.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './search-layout.scss';
import ComponentSummary from '../../components/podcast-summary/podcast-summary.jsx';
class SearchLayout extends Component {
  constructor() {
    super();
    this.state ={
      searchInput: '',
      PodcastToRender : [],
      emptySearch: false
    }
    this.searchResultList = [];
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.getSearchValue = this.getSearchValue.bind(this);
    this.executeFilterSearch = this.executeFilterSearch.bind(this);
    this.renderWarning = this.renderWarning.bind(this);
  }

  mapArrayFromResponse(){
    this.searchResultList = this.props.searchResults.map((podcast,index)=>{ 
      const podcastElementFiltered = {
        index: index,  
        id: podcast.id.attributes['im:id'],
        name: podcast.title.label,
        artist: podcast['im:artist'].label,
        image: (podcast['im:image'].length >= 3) ? podcast['im:image'][2].label: podcast['im:image'][0].label,
        description: (podcast.hasOwnProperty('summary')) ? podcast.summary.label : ''
      }
      return podcastElementFiltered;
    });
    this.setState({PodcastToRender: this.searchResultList});
  }
  
  componentWillMount(){
    this.props.searchPodcastList().then(()=>{
      this.mapArrayFromResponse();
      this.props.filterPodcastResult(this.searchResultList);
    });
  } 
  executeFilterSearch(){
    // check if the input string is contained on the element searched
    const searchFiltered = this.searchResultList.filter((element) => {
      if(element.name.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
        return element;
      }
    })
    if(searchFiltered.length >= 1){
      this.setState({PodcastToRender: searchFiltered, emptySearch: false})
    } else{
      this.setState({
        PodcastToRender: [],
        emptySearch: true
      })
    }
    
    
  }
   
  updateSearchValue(stringValue){
    // uploading the internal state of the component the render method update the search array filtered on the input on the callback state method 'executeFilterSearch'
    this.setState({ searchInput:  stringValue},this.executeFilterSearch);
    
  }
  // this is the handler for the search input
  getSearchValue(e){
    const searchString = e.target.value;
    // if strings is just space set intial search state
    if(!searchString.replace(/\s/g,'').length){
      this.setState({
        PodcastToRender: this.searchResultList,
        emptySearch: false
      });
      return false;
    }
    if(this.state.searchInput !== '' && searchString.length > 2 || searchString.length > 2 && searchString !== this.state.searchInput) {
      this.updateSearchValue(searchString);
    } else{
      this.setState(
        {PodcastToRender: this.searchResultList,
        emptySearch: false
        })
    }
  }
  // Method for search warning and no results
  renderWarning(){
    return(
      <div className="row">
        <div className="notification notification--error"><p>NO results for {this.state.searchInput}</p></div>
      </div>
      
    )
  }
  render() {

    return(
      <div className="wrapper">
        <div className="row border-bottom  mb-medium aligner aligner--contentEnd">
          <div className="input input-withIcon m-medium">
            <input id="test1" placeholder="Filter Podcasts" type="text" onChange={this.getSearchValue} />
            <svg className="input-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
              <g>
                <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"/>
              </g>
            </svg>
          </div>
        </div>
        { this.state.emptySearch ? this.renderWarning() : null }
        
        <div className="row  mb-medium" >
          <div></div>
          { this.state.PodcastToRender.length > 0 && 
              this.state.PodcastToRender.map((podcastElementFiltered,index)=>{
                return ( 
                  <ComponentSummary key={index} podcastElement={podcastElementFiltered}/>
                );
              })
          }          
        </div>
      </div>
    
    );
  }
}

SearchLayout.propTypes ={
  searchPodcastList : PropTypes.func.isRequired,
  filterPodcastResult: PropTypes.func.isRequired,
  searchResults: PropTypes.array
}

const mapStateToProps = (state) => ({
  searchResults: state.generalResults.data
});



export default connect(mapStateToProps,{searchPodcastList, filterPodcastResult})(SearchLayout);