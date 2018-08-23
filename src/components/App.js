import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Landing from './Landing';
import DashboardContainer from './dashboard/DashboardContainer';
import styles from './App.css';
import Header from './Header';

class App extends Component {

  render() {

    return (
      <Router>
        <div className={styles.app}>
          <header>
            <Header/>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/notes" component={DashboardContainer}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;