import React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import EntryPoint from "./pages/EntryPoint";
import Personalization from "./pages/Personalization";
import NewDay from "./pages/NewDay";
import Activities from "./pages/Activities";
import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li><a href="/entry">Entry</a></li>
        <li><a href="/configure">Configure</a></li>
        <li><a href="/start-day">Start-day</a></li>
      </ul>
    
    <Router>
      <Switch>
        <Route path="/entry" component={EntryPoint} />
        <Route path="/choose-activities" component={Activities} />
        <Route path="/pesronalize" component={Personalization} />
        <Route path="/start-day" component={NewDay} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
