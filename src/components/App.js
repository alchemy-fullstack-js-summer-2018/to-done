import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import styles from './App.css';
import NoteContainer from './note/NoteContainer';

class App extends Component {
    
  render() {
    
    return (
      <Router>
        <div className={styles.app}>
          <header>
            <Header/>
          </header>
          <h1>To Done</h1>
          <main>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/notes" component={NoteContainer}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;