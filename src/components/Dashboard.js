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

  componentDidMount() {
    getNotes()
      .then(notes => {
        this.setState({ notes });
      });
  }

  handleAdd = note => {
    return addNote(note)
      .then(added => {
        this.setState(({ notes }) => {
          return {
            notes: [...notes, added]
          };
        });
      });
  };

  handleUpdate = note => {
    return updateNote(note)
      .then(updated => {
        this.setState(({ notes }) => {
          return {
            notes: notes.map(note => note.key === updated.key ? updated : note)
          };
        });
      });
  };

  handleRemove = key => {
    return removeNote(key)
      .then(() => {
        this.setState(({ notes }) => {
          return {
            notes: notes.fileter(note => note.key !== key)
          };
        });
      });
  };

  render() {

    const { notes } = this.state;


    return (
      <div>
        <h2>Dashboard Page</h2>
        <p>contains notes list and note form</p>
        <section>
          <h3>Add a Note</h3>
          <NoteForm onComplete={this.handleAdd}/>
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