import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class App extends Component {

  click() {
    browserHistory.push('/transaction');
  }

  render() {
    return (
      <div className="app">
        <div className="wallet" onClick={this.click}>
          Open my wallet
        </div>
      </div>
    );
  }
}

export default App;
