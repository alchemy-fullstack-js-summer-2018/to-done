import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
// import AnimalsContainer from './artists/ArtistsContainer';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Header/>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route exact path="/artists" component={ArtistsContainer}/> */}
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;