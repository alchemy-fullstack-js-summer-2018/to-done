import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class NoteList extends Component {

  static propTypes = {
    notes: PropTypes.array,
    onUpdate: PropTypes.func.isRequired,
    // onRemove: PropTypes.func.isRequired
  };

  render() {

    const { notes, onUpdate/*, onRemove*/ } = this.props;
    console.log('notes', notes);
    return (
      <ul>
        {notes.map(note => (
          <Note
            key={note.key}
            note={note}
            onUpdate={onUpdate}
            // onRemove={onRemove}
          />
        ))}
      </ul>
    );
  }
}

export default NoteList;