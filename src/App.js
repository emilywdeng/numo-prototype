import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, hashHistory} from 'react-router';

import './App.css';

import Questions from './Questions';
import NavBar from './Navigation';
import './Navigation.css';
import Profile from './Profile';



//data that shows on cards
// const data = ['Emily', 'Nathan', 'Lucien'];

const fields = ['Question Text'];

const config = {
  base: 'appCZfN8YJIVjk5vJ',
  table: 'Questions',
  view: 'Grid%20view',
  apiKey: 'keydGpK7XeREMvLjd',
  maxRecords: '20',
  fields: 'QuestionText'
}

const request = new Request(`https://api.airtable.com/v0/${config.base}/${config.table}?maxRecords=${config.maxRecords}&view=${config.view}`, {
  method: 'get',
  headers: new Headers({
    'Authorization': `Bearer ${config.apiKey}`
  })
});


const CustomAlertLeft = () => <span>Nope</span>;
const CustomAlertRight = () => <span>Ok</span>;


//class NavBar extends React.Component {
//  render () {
//    return (
//      <div className="NavBar">Hello world!</div>
//    );
//  }
//}

// from CARD
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