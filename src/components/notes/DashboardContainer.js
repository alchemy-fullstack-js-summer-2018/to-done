import React, { Component } from 'react';
import Dashboard from './Dashboard.js';
import {
  getNotes,
  addNote,
  updateNote,
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
        this.setState(({ notes }) => ({ notes: [added, ...notes] }));
        return added;
      });
  };

  handleUpdate = note => {
    return updateNote(note)
      .then(updated => {
        this.setState(({ notes }) => ({
          notes: notes.map(n => n.key === updated.key ? updated : n)
        }));
        return updated;
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