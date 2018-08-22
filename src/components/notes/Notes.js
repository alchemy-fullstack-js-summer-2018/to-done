import React, { Component } from 'react';
import Note from './Note.js';

class Notes extends Component {
  render() {
    return (
      <div>
        <h2>Lots o' Notes</h2>
        <Note/>
      </div>
    );
  }
}

export default Notes;