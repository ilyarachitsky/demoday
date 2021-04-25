import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Tv from "./components/Tv";
import Musicer from "./components/Musicer";
import Videogames from "./components/Videogames";
import Sport from "./components/Sport";
import Historia from "./components/Historia";
import Comics from "./components/Comics";
import Board from "./components/Board";
import Computers from "./components/Computers";
import Geo from "./components/Geo";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tv" component={Tv} />
          <Route exact path="/musicer" component={Musicer} />
          <Route exact path="/videogames" component={Videogames} />
          <Route exact path="/sport" component={Sport} />
          <Route exact path="/historia" component={Historia} />
          <Route exact path="/comics" component={Comics} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/computers" component={Computers} />
          <Route exact path="/geo" component={Geo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
