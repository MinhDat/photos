import Navigation from "component/Navigation";
import Spinner from "component/Spinner";
import Home from "pages/Home";

import "utils/global.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Spinner />
      <Home />
    </div>
  );
}

export default App;
