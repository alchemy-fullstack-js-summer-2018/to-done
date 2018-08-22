import React, { Component } from 'react';
import NoteForm from './NoteForm';

class NotesContainer extends Component {

  state = {
    notes: null
  };

  componentDidMount() {
    console.log('mounted!');
    // getNotes()
    //   .then(notes => {
    //     this.setState({ notes });
    //   });
  }

  handleAdd = () => {
    console.log('add!');
  }

  render() {
    
    return (
      <div>
        <h1>Hello</h1>
        <NoteForm/>
      </div>
    );
  }
}

export default NotesContainer;