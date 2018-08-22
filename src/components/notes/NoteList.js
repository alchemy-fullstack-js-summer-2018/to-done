import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class Notes extends Component {

  static propTypes = {
    notes: PropTypes.array,
    onUpdate: PropTypes.func.isRequired
  };

  render() {
    const { notes, onUpdate } = this.props;

    return (
      <ul>
        {notes.map(note => (
          <Note
            key={note.key}
            note={note}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default Notes;