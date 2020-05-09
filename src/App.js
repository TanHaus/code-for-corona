import React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import EntryPoint from "./pages/EntryPoint";
import Personalization from "./pages/Personalization";
import NewDay from "./pages/NewDay";
import Activities from "./pages/Activities";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/entry" component={EntryPoint} />
        <Route path="/choose-activities" component={Activities} />
        <Route path="/pesronalize" component={Personalization} />
        <Route path="/start-day" component={NewDay} />
      </Switch>
    </Router>
  );
}

export default App;
