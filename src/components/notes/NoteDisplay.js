import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {
  
  static propTypes = {
    note: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  render() {
    const { note, onEdit } = this.props;

    return (
      <Fragment>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <button name="edit" onClick={onEdit}>Edit</button>
      </Fragment>
    );
  }
}

export default Note;