import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class NoteList extends Component {
  static propTypes = {
    noteList: PropTypes.array
  };

  render() {
    const { noteList } = this.props;

    return (
      <ul>
        {noteList.map(note => (
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