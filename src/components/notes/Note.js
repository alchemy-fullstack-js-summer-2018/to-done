import React, { Component } from 'react';
import NoteDisplay from './NoteDisplay';
import NoteForm from './NoteForm';
class Note extends Component {
  render() {
    return (
      <div>
        <NoteDisplay/>
        <NoteForm/>

      </div>
    );
  }
}

export default Note;