import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NoteDisplay extends Component {
  static propTypes = {
    note: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const { note, onEdit, onDelete } = this.props;

    return (
      <p>
        Completed: <input type="checkbox"/> <br/>
        Title:{note.title}, <br/> Message:{note.content} <br/>
        <button name="edit" onClick={onEdit}>Edit</button>
        <button name="delete" onClick={onDelete}>Delete</button>
      </p>
    );
  }
}

export default NoteDisplay;