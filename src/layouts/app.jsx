import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import SearchLayout from '../layouts/search-result/search-layout.jsx';
import PodcastView from '../layouts/podcast-view/podcast-view.jsx';
function App() {
  return (  
    <Router>
    <div className="container">
      <nav className="row aligner aligner--contentStart p-medium border-bottom">
        <Link to="/">
          <h1>PodCaster</h1>
        </Link>
      </nav>
        <Route exact path="/" component={SearchLayout} />
        <Route exact path="/podcast/:podcastId" component={PodcastView} />
    </div>
    </Router>
  );
}


export default App