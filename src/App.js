import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom'
import { Home } from './Home/Home'
import { NewTask } from './NewTask/NewTask.jsx'


function App() {

  return (
    <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/newtask">
            <NewTask />
          </Route>
    </Router>
  );
}

export default App;
