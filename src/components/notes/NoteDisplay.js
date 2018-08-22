import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {

  static propTypes = {
    note: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const { note, onEdit, onDelete } = this.props;

    return (
      <p className="note-display">
        {note.name} the {note.type} 
        <button name="edit" onClick={onEdit}>✎</button>
        <button name="delete" onClick={onDelete}>🗑</button>
      </p>
    );
  }
}

export default Note;