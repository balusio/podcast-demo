import React, { Component } from "react";
import './podcast-summary.scss';
import PropTypes from 'prop-types';
class ComponentSummary extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    
  }
  render() {

    return(
      <div className="container">
        <div className="wrapper">
         
        </div>
      </div>
    );
  }
}

ComponentSummary.propTypes ={
  podcastElement : PropTypes.object.isRequired
}

export default ComponentSummary;