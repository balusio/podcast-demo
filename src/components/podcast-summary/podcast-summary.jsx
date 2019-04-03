import React, { Component } from "react";
import './podcast-summary.scss';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
class ComponentSummary extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    
  }
  render() {

    return(
      <Link to={`/podcast/${this.props.podcastElement.id}`} className="col-sm-3">
        <div>
          <img className="rounded" src={this.props.podcastElement.image} alt={this.props.podcastElement.name}  />
          <p>{this.props.podcastElement.name}</p>
        </div>
      </Link>
    );
  }
}

ComponentSummary.propTypes ={
  podcastElement : PropTypes.object.isRequired
}

export default ComponentSummary;