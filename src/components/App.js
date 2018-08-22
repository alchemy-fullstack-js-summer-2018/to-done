import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Header/>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;