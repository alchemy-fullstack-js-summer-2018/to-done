import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Landing from './Landing';
import DashboardContainer from './notes/DashboardContainer';

class App extends Component {
  render() { 
    return (
      <Router>
        <div>
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