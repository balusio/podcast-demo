import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import SearchLayout from '../layouts/search-result/search-layout.jsx';
function App() {
  return (  
    <div className="container">
      <nav className="row aligner aligner--contentStart">
        <Link to="/">
          <h1>PodCaster</h1>
        </Link>
      </nav>
      <Router>
        <Route path="/" component={SearchLayout} />
      </Router>
    </div>
  );
}

export default App;