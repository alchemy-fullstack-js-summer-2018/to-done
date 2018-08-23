import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class NoteList extends Component {
  static propTypes = {
    noteList: PropTypes.array,
    onUpdate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
  };

  render() {
    const { noteList, onUpdate, onRemove } = this.props;

    return (
      <ul>
        {noteList.map(note => (
          <Note
            key={note.key}
            note={note}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ))}
      </ul>
    );
  }
}
 
export default NoteList;