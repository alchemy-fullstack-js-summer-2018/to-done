import React, { Component } from 'react';
import Dashboard from './Dashboard.js';
import {
  getNotes,
  addNote,
  updateNote,
  removeNote
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

  handleUpdate = note => {
    return updateNote(note)
      .then(updated => {
        this.setState(({ notes }) => ({
          notes: notes.map(n => n.key === updated.key ? updated : n)
        }));
        console.log(this.state.notes);
      });
  };


  render() {
    const { notes } = this.state;
    
    return (
      <section>
        <Dashboard
          notes={notes}
          onAdd={this.handleAdd}
          onUpdate={this.handleUpdate}
        />
      </section>
    );
  }
}

export default DashboardContainer;