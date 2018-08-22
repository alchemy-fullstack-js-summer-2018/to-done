import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.css';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

class App extends Component {

  render() {

    return (
      <Router>
        <div className={styles.app}>
          <header>
            <Header />
          </header>

          <main>
            <h1 className="apph1">App is loading - css too if this is green</h1>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;