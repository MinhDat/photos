import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "component/Navigation";
import Spinner from "component/Spinner";
import Home from "pages/Home";
import Like from "pages/Like";
import Delete from "pages/Delete";

import "utils/global.scss";

function App() {
  const [enable, setEnable] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <Router>
        <Navigation {...{ setSearchText }} />
        <Switch>
          <Route path="/like">
            <Like {...{ setEnable }} />
          </Route>
          <Route path="/delete">
            <Delete {...{ setEnable }} />
          </Route>
          <Route path="/">
            <Home {...{ setEnable, searchText }} />
          </Route>
        </Switch>
      </Router>
      <Spinner {...{ enable }} />
    </div>
  );
}

export default App;
