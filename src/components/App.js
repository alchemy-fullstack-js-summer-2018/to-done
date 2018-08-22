import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import DashboardContainer from './DashboardContainer';

class App extends Component {


  render() {

    return (
      <div>
        <Router>
          <div>
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
      </div>
    );
  }
}

export default App;