import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import NotesContainer from './notes/NotesContainer';
import styles from './App.css';


class App extends Component {


  render() {

    return (
      <Router>
        <div className={styles.app} >
          <header>
            <Header/>
          </header>
          
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
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