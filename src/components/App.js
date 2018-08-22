import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends Component {


  render() {

    return (
      <Router>
        <div >
          <header>
            
          </header>
          
          <main>
            <Switch>
              {/* <Route exact path="/" component={Home}/>
              <Route exact path="/animals" component={NotesContainer}/> 
              <Redirect to="/"/> */}
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;