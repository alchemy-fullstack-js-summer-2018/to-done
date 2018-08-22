import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class Notes extends Component {

  static propTypes = {
    notes: PropTypes.array
  };

  render() {
    const { notes } = this.props;

    return (
      <ul>
        {notes.map(note => (
          <Note
            key={note.key}
            note={note}
          />
        ))}
      </ul>
    );
  }
}

export default Notes;