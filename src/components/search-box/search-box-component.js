import React, { Component } from "react";

class SearchBoxComponent extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="row">
        <form>
          <input placeholder="search"></input>
        </form>
      </div>
      
    );
  }
}
export default SearchBoxComponent;