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

const config = {
  base: 'appCZfN8YJIVjk5vJ',
  table: 'Questions',
  view: 'Grid%20view',
  apiKey: 'keydGpK7XeREMvLjd',
  maxRecords: '20'
}

const request = new Request(`https://api.airtable.com/v0/${config.base}/${config.table}?maxRecords=${config.maxRecords}&view=${config.view}`, {
  method: 'get',
  headers: new Headers({
    'Authorization': `Bearer ${config.apiKey}`
  })
});


const CustomAlertLeft = () => <span>Dislike</span>;
const CustomAlertRight = () => <span>Like</span>;


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
<<<<<<< HEAD
        <Cards 
          alertRight={<CustomAlertRight />} 
          alertLeft={<CustomAlertLeft />}
          onEnd={console.log("action('end')")} 
          className='master-root'
        >
            {records.map(record =>
              <Card
                key={JSON.stringify(record.fields.QuestionText)}
                onSwipeLeft={() => {console.log("action('swipe left')")}}
                onSwipeRight={() => {console.log("action('swipe right')")}}
              >
                <h2>{JSON.stringify(record.fields.QuestionText)}</h2>
              </Card>
            )}
          </Cards>
=======
        <Questions>
        </Questions>

        <NavBar>
        </NavBar>
>>>>>>> Global-Nav-Bar
      </div>

    );
  }
};


export default App;