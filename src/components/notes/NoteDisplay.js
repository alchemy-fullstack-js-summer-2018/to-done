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
      <p>
        {note.title}
        {note.content}
        <button name="edit" onClick={onEdit}>Edit</button>
        <button name="delete" onClick={onDelete}>Delete</button>
      </p>
    );
  }
}

export default Note;