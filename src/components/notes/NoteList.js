import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

export default class NoteList extends Component {

  static propTypes = {
    notes: PropTypes.arrayOf(Object),
    onUpdate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
  };
  

  render() {

    const { notes, onUpdate, onRemove } = this.props;
    if(!notes) return null;
    return (
      <ul>
        {notes.map(note => (
          <Note
            note={note}
            key={note.key}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ))}
      </ul>
    );
  }
}
