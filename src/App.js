import React, { Component } from 'react';
import './App.css';
import Youtube from './Youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React YouTube app</header>
        <Youtube />
      </div>
    );
  }
}

export default App;
