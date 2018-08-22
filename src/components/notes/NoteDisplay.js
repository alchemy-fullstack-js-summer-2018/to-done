import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {
  static propTypes = {
    note: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired
   
  };

  render() {
    const { note, onEdit } = this.props;

    return (
      <p>
        {note.title} : {note.content}
        <button name="edit" onClick={onEdit}>✎</button>
      </p>  
    );
  }
}

export default Note;