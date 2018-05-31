import React, { Component } from 'react';

import axios from 'axios';

const api = {
  fetch: () => axios.get('/data.json').then(res => res.data),
};

class App extends Component {
  state = {
    airlines: [],
    subAirlines: [],
  };

  componentDidMount() {
    api.fetch().then(result => {
      console.log(result);
      this.setState(() => ({
        airlines: result.filter(city => !Object.prototype.hasOwnProperty.call(city, 'parentId')),
        subAirlines: result.filter(city => Object.prototype.hasOwnProperty.call(city, 'parentId')),
      }));
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>{this.state.airlines.map(item => <div key={item.id}>{item.city}</div>)}</div>
        <div style={{ padding: '1rem 0 0 1rem', marginTop: '1rem', borderTop: '1px solid gray' }}>
          {this.state.subAirlines.map(item => <div key={item.id}>{item.city}</div>)}
        </div>
      </div>
    );
  }
}

export default App;
