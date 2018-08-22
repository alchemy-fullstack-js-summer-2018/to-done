import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NoteDisplay extends Component {
  
  static propTypes = {
    note: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired
  }

  render() {

    const { note, onEdit } = this.props;
    return (
      <div>
        <p>{note.title}</p>
        <p>{note.content}</p>
        <button name="edit" onClick={onEdit}>Edit</button>
      </div>
    );
  }
}
