import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, hashHistory} from 'react-router';

import './App.css';

import Questions from './Questions';
import NavBar from './Navigation';
import './Navigation.css';
import Profile from './Profile';


class App extends React.Component {

  render () {


    return (
      <div className="App">
        <Questions>
        </Questions>

        <NavBar>
        </NavBar>
      </div>

    );
  }
};


export default App;