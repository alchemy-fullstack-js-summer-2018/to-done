import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class NoteList extends Component {

  static propTypes = {
    notes: PropTypes.array
  };

  render() {
    const { notes } = this.props;

    return (
      <div>
        <h3>I am the Note List</h3>
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

export default NoteList;