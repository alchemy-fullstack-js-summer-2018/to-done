import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
//import Header from './Header';
import Home from './Home';
import styles from './App.css';

class App extends Component {
    
  render() {
    
    return (
      <Router>
        <div className={styles.app}>
          <h1>I App.js</h1>
      
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Redirect to="/"/>
            </Switch> 
          </main>
        </div>
      </Router>
    );
  }
}

export default App;