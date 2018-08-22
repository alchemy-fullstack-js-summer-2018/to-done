import React, { Component } from 'react';

import {
  getNotes, 
  addNote,
  updateNote,
  removeNote } from '../../services/notesApi';

class Dashboard extends Component {

  state = {
    id: null,
    notes: [],
    title: '',
    content: '',
    completed: false
  };


  render() {
    return (
      <div>
        <h2>Dashboard Page</h2>
        <p>contains notes list and note form</p>
      </div>
    );
  }
}


export default Dashboard;