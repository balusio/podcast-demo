import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import SearchLayout from '../layouts/search-result/search-layout.jsx';

function App() {
  return (  
    <div className="container">
      <nav className="row aligner aligner--contentStart p-medium border-bottom">
        <a href="/">
          <h1>PodCaster</h1>
        </a>
      </nav>

      <Router>
        <Route path="/" component={SearchLayout} />
      </Router>
    </div>
  );
}


export default App