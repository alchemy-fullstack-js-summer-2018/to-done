import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Landing from './Landing/Landing';
import styles from './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <Fragment>
          <header className={styles.app}>
            <h1>Hello World</h1>
          </header>

          <main>
            <Switch>
              <Route exact path="/"/*  component={Landing} *//>
              <Redirect to="/"/>
            </Switch>
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;