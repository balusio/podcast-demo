import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (  
    <Router>
      <div>
        <h1>PodCaster</h1>
        <button className="button button--small button--outlined">text</button>
      </div>
    </Router>
  );
}

export default App;