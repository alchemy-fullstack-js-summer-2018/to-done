import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note.js';

class Notes extends Component {

  static propTypes = {
    notes: PropTypes.arrayOf(Object).isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  render() {
    const { notes, onUpdate } = this.props;

    return (
      <div>
        <ul>
          {notes.map(note => (
            <Note
              key={note.key}
              note={note}
              onUpdate={onUpdate}
            />

          ))}
        </ul>
      </div>
    );
  }
}

export default Notes;