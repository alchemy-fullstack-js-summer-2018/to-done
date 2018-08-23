import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteDisplay extends Component {
  static propTypes = {
    note: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onCheckChange: PropTypes.func.isRequired
  };

  onCheck = () => {
    const { note, onCheckChange } = this.props;
    return onCheckChange(note);
  };

  render() {
    const { note, onEdit } = this.props;

    return (
      <div>
        <h4>{note.title}</h4>
        <p>{note.content}</p>
        <input type="checkbox" checked={note.completed} onChange={this.onCheck}/> Completed
        <br/>
        <button name="edit" onClick={onEdit}>Edit</button>
      </div>
    );
  }
}

export default NoteDisplay;