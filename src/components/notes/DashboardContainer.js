import React, { Component } from 'react';
// import Notes from './Notes';
// import NoteForm from './NoteForm';
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

  render() {
    return (
      <div>
        <h3>Notes</h3>
      </div>
    );
  }
}

export default DashboardContainer;
