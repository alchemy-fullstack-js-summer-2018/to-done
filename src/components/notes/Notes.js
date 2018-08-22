import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note.js';

class Notes extends Component {

  static propTypes = {
    notes: PropTypes.arrayOf(Object),
  };

  render() {
    const { notes } = this.props;

    return (
      <div>
        <ul>
          {notes.map(note => (
            <Note
              key={note.key}
              note={note}
            />

          ))}
        </ul>
      </div>
    );
  }
}

export default Notes;