import React, { Component } from 'react';
import Notes from './notes/Notes';
import NoteForm from './notes/NoteForm';

import {
  getNotes, 
  addNote,
  updateNote,
  removeNote } from '../services/notesApi';

class Dashboard extends Component {

  state = {
    key: null,
    notes: [],
    title: '',
    content: '',
    completed: false
  };


  render() {

    const { notes } = this.state;


    return (
      <div>
        <h2>Dashboard Page</h2>
        <p>contains notes list and note form</p>
        <section>
          <h3>Add a Note</h3>
          <NoteForm />
        </section>

        {notes &&
          <section>
            <h3>Notes</h3>
            <Notes
              notes={notes}
              onUpdate={this.handleUpdate}
              opnRemove={this.handleRemove}
            />
          </section>  
        }

      </div>
    );
  }
}


export default Dashboard;