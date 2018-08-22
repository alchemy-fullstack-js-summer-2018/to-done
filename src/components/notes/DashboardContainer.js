import React, { Component } from 'react';
import Dashboard from './Dashboard.js';
import {
  getNotes,
  addNote
} from '../../services/notesApi';

class DashboardContainer extends Component {

  state = {
    notes: null
  };

  componentDidMount() {
    getNotes()
      .then(notes => this.setState({ notes }));
  }

  handleAdd = note => {
    return addNote(note)
      .then(added => {
        this.setState(({ notes }) => ({ notes: [...notes, added] }));
      });
  };

  render() {
    const { notes } = this.state;
    
    return (
      <section>
        <Dashboard onAdd={this.handleAdd} notes={notes}/>
      </section>
    );
  }
}

export default DashboardContainer;