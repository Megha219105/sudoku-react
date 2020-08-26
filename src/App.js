import React from 'react';
import './App.css';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import { Index, DifficultyDialog } from './components/Main';
import Store from './components/Store';
import Game from './components/SudokuGame';

  
function App() {
    if (localStorage.currentGame) {
      Store.dispatch({type: 'RESUME_GAME'});
    };

  return (
    <React.Fragment>
    <Router>
      <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/play" component={Game} />
      <Route path="/new-game" component={DifficultyDialog} />
      </Switch>
  </Router>
  </React.Fragment>
  );
  };


export default App;