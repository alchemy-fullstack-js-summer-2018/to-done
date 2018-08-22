import React, { Component } from 'react';
import NoteForm from './notes/NoteForm';
import NoteList from './notes/NoteList';
import {
  getNotes,
  addNote,
  updateNote,
  removeNote } from '../services/notesApi';

export default class DashboardContainer extends Component {

  state = {
    notes: null
  }

  componentDidMount() {
    getNotes()
      .then(notes => {
        this.setState({ notes });
      })
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
  }

  handleUpdate = note => {
    return updateNote(note)
      .then(updated => {
        this.setState(({ notes}) => {
          return {
            notes: notes.map(note => note.key === updated.key ? updated : note)
          };
        });
      });
  };

  render() {

    const { notes } = this.state;

    return (
      <div>
        <section>
          <h3>Make a Note!</h3>
          <NoteForm onComplete={this.handleAdd}/>
        </section>

        {notes &&
        <section>
          <h3>Notes:</h3>
          <NoteList
          notes={notes}
          onUpdate={this.handleUpdate}
          />
        </section>
        }
      </div>
    );
  }
}
