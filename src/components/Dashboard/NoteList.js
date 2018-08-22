import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class NoteList extends Component {

  static propTypes = {
    notes: PropTypes.array
  };

  render() {
    const { notes } = this.props;
    if(!notes) return null;

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

export default NoteList;