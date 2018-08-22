import React, { Component } from 'react';
// import Notes from './Notes';
import NoteForm from './NoteForm';
import {
  getNotes,
  addNote,
  updateNote,
  removeNote } from '../services/notesApi';

export class DashboardContainer extends Component {

  state = {
    notes: null
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

  render() {
    return (
      <div>
        <h3>Add a note!</h3>
        <NoteForm onComplete={this.handleAdd}/>
      </div>
    );
  }
}

export default DashboardContainer;
