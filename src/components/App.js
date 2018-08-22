import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Landing from './Landing/Landing';
import DashboardContainer from './Dashboard/DashboardContainer';
import styles from './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <div className={styles.app}>
          <header>

          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/dashboard" component={DashboardContainer}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;