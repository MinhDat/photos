import { useState } from "react";

import Navigation from "component/Navigation";
import Spinner from "component/Spinner";
import Home from "pages/Home";

import "utils/global.scss";

function App() {
  const [enable, setEnable] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <Navigation {...{ setSearchText }} />
      <Home {...{ setEnable, searchText }} />
      <Spinner {...{ enable }} />
    </div>
  );
}

export default App;
