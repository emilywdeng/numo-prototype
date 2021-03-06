import React from 'react';
import ReactDOM from 'react-dom';
import Cards, { Card } from 'react-swipe-card';
import './react-swipe-card.css';
import 'whatwg-fetch';


//data that shows on cards
// const data = ['Emily', 'Nathan', 'Lucien'];

// const fields = ['Question Text'];


const CustomAlertLeft = () => <span>Dislike</span>;
const CustomAlertRight = () => <span>Like</span>;

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


//class NavBar extends React.Component {
//  render () {
//    return (
//      <div className="NavBar">Hello world!</div>
//    );
//  }
//}

// from CARD
class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { records: [] };
    this.fetchAirtable = this.fetchAirtable.bind(this);
  }

  async componentDidMount() {
    await this.fetchAirtable()
  }

  async fetchAirtable() {
    var resp = await fetch(request).catch(err => {console.log(err)})
    if(resp.status >= 200 && resp.status < 300) {
      var json = await resp.json()
      const {records} = json;
      this.setState({ records });
    }
  }

  render () {
    var {records} = this.state;


    return (
      <div className="Questions">
        <Cards 
          alertRight={<CustomAlertRight />} 
          alertLeft={<CustomAlertLeft />}
          onEnd={console.log("action('end')")} 
          className='Cards master-root'
        >
            {records.map(record =>
              <Card
                key={JSON.stringify(record.fields.QuestionText)}
                onSwipeLeft={() => {console.log("action('swipe left')")}}
                onSwipeRight={() => {console.log("action('swipe right')")}}>
                <h2>{JSON.stringify(record.fields.QuestionText)}</h2>
              </Card>
            )
           }
        </Cards>
      </div>
      );
  }
};

export default Questions;