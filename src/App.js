import React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import EntryPoint from "./pages/EntryPoint";
import Personalization from "./pages/Personalization";
import NewDay from "./pages/NewDay";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/entry">Entry Point</Link>
            </li>
            <li>
              <Link to="/configure">Configure</Link>
            </li>
            <li>
              <Link to="/start-day">Start you Day</Link>
            </li>
          </ul>
        </nav> */}
      <Switch>
        <Route path="/">
          <EntryPoint />
        </Route>
        <Route path="/configure">
          <Personalization />
        </Route>
        <Route path="/start-day">
          <NewDay />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
