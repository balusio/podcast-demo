import React, { Component } from "react";
import './search-layout.scss';

class SearchLayout extends Component {
  constructor() {
    super();
    this.state = {
      elements: ['Tecnologîa','Accesorios','telefonos', 'ipod', '32gb']
    };
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

export default SearchLayout;