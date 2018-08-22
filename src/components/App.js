import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Header from './Header';
import Landing from './Landing';
// import styles from './App.css';
import Header from './Header';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="dynamic-class here">
          <header>
            <Header/>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;