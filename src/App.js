import React from 'react';
import './App.css';
import Cards, { Card } from 'react-swipe-card';
import './react-swipe-card.css';

const data = ['Alexandre', 'Thomas', 'Lucien'];

const CustomAlertLeft = () => <span>Nop</span>;
const CustomAlertRight = () => <span>Ok</span>;

const App = () => {
  return (
    <div className="App">
  <Cards onEnd={console.log("action('end')")} className='master-root'>
      {data.map(item =>
        <Card
          key={item}
          onSwipeLeft={() => {console.log("action('swipe left')")}}
          onSwipeRight={() => {console.log("action('swipe right')")}}>
          <h2>{item}</h2>
        </Card>
      )}
    </Cards>
    </div>
  );
};

export default App;