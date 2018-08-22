import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';


class App extends Component {


  render() {

    return (
      <Router>
        <div >
          <header>
            <Header/>
          </header>
          
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route exact path="/notes" component={NotesContainer}/> 
              <Redirect to="/"/>  */}
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;