import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing/Landing';
import DashboardContainer from './Dashboard/DashboardContainer';
import styles from './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <Fragment>
          <header className={styles.app}>
            <h1>Hello World</h1>
            <Header/>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/dashboard" component={DashboardContainer}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;