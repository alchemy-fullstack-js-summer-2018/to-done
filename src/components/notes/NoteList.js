import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

export default class NoteList extends Component {

  static propTypes = {
    notes: PropTypes.arrayOf(Object),
    onUpdate: PropTypes.func.isRequired
  }
  

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
