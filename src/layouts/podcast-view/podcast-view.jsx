import React, { Component } from "react";
import {getPodcastDetail} from '../../redux/actions/podcast-detail';
import {fetchPodcastItems} from '../../redux/actions/podcast-items';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link , Route } from "react-router-dom";
import PodcastList from '../../components/podcast-list/podcast-list.jsx';
import PodcastDetail from '../../components/podcast-detail/podcast-detail.jsx';
import './podcast-view.scss';
import {markupEscape} from '../../utils';

class PodcastView extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      fetchingData: true,
      podcastDetails: {
        id: 0,
        index: '',  
        name: '',
        artist: '',
        image: '',
        description: ''
      }
    }    
    this.createMarkup = markupEscape
  }
  componentWillMount(){
    const idPodcast = this.props.match.params.podcastId;
    
    this.props.getPodcastDetail(idPodcast).then((response)=>{
      this.setState({podcastDetails:response});
    })
    
    this.props.fetchPodcastItems(idPodcast).then(()=>{
      this.setState({
        fetchingData: false,
        items: this.props.podcastItems.items
      });
    });
  }


  loadingBar(){
    return(
      <div className="loadingSpinner">
        <span className="loadingSpinner-inner"></span>
        <span className="loadingSpinner-inner"></span>
        <span className="loadingSpinner-inner"></span>
        <span className="loadingSpinner-inner"></span>
      </div>
    )
  }
  render(){
    return (
      // <Route path="/abc" render={()=><TestWidget num="2" someProp={100}/>}/>
      <div className="container-podcast-detail">
        <div className="row aligner aligner--spaceBetween m-big">
          <aside className="col col-sm-3 ">
              <div className="box-shadow-container p-big">
                  <img  src={this.state.podcastDetails.image} alt="#" className="border-rounded"/>
                  <h4>{this.state.podcastDetails.description.title}</h4>
                  <div dangerouslySetInnerHTML={this.createMarkup(this.state.podcastDetails.description)}>
                </div>
              </div>
          </aside>
          <article className="col col-sm-8">
          
          { this.state.fetchingData ? this.loadingBar() :
            <div> 
              <Route exact path="/podcast/:podcastId" 
                render={(props) => <PodcastList {...props} items={this.state.items} />} />
              <Route path="/podcast/:podcastId/episode/:episodeId" render={(props) => <PodcastDetail {...props} episode={this.props.podcastEpisode.items} />} />
            </div>
            
          }

           </article>
        </div>
      </div>
    )
  }
}

PodcastView.propTypes ={
  podcastElement: PropTypes.object,
  podcastItems: PropTypes.object.isRequired,
  getPodcastDetail: PropTypes.func.isRequired,
  fetchPodcastItems: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  podcastElement: state.detailedPodcast,
  podcastItems : state.podcastItems,
  podcastEpisode: state.podcastEpisode
});



export default connect(mapStateToProps,{getPodcastDetail,fetchPodcastItems})(PodcastView);