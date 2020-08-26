import { Link } from 'react-router-dom';
import React from 'react';
import Store from './Store';
import Sudoku from './Sudoku';
import Boards from './Boards';

export class Index extends React.Component {
    hasExistingGame() {
      return (typeof localStorage.currentGame !== 'undefined');
    }
  
    render() {
      return (
        <div className="index">
          <h1>Sudoku</h1>
          <p><Link to="/new-game">Start a new game</Link></p>
          {this.hasExistingGame()
            ? <p>or <Link to="/play">resume the existing one</Link></p>
            : null}
        </div>
      );
    }
  
  }

export class DifficultyDialog extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = Store.getState();
  
      this.difficultyClick = this.difficultyClick.bind(this);
    }
  
    shouldComponentUpdate(newProps, newState) {
      return false;
    }
  
    componentDidMount() {
      var self = this;
      self.unsubscribe =  Store.subscribe(function() {
        self.setState(Store.getState());
      });
    }
  
    componentWillUnmount() {
      this.unsubscribe();
    }
  
    difficultyClick(event) {
      event.preventDefault();
      var difficulty = event.target.getAttribute('data-difficulty');
      Store.dispatch({type: 'NEW_GAME', difficulty});
      window.location.href = '/play';
    }
  
    render() {
      return (
        <div className="dialog">
          <Link to="/" className="dialog-close">&#x2715;</Link>
          <p>Please, choose the difficulty:</p>
          <button data-difficulty="easy" onClick={this.difficultyClick}>Easy</button>
          <button data-difficulty="medium" onClick={this.difficultyClick}>Medium</button>
          <button data-difficulty="hard" onClick={this.difficultyClick}>Hard</button>
        </div>
      );
    }
  
  
  }