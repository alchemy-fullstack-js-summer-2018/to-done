import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Landing from './Landing';
import NotesContainer from './notes/NotesContainer';
import Header from './Header';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <Header/>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/notes" component={NotesContainer}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
