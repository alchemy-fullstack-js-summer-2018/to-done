import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteDisplay extends Component {

  static propTypes = {
    note: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };
  
  render() {
    const { note, onEdit, onDelete } = this.props;

    return (
      <div>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <p>Completed? {note.completed}</p>
        <button name="edit" onClick={onEdit}>Edit</button>
        <button name="delete" onClick={onDelete}>delete</button>
      </div>
    );
  }
}
 
export default NoteDisplay;