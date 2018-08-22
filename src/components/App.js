import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

class App extends Component {


  render() {

    return (
      <Router>
        <div >
          <header>
            
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