import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteDisplay extends Component {

  static propTypes = {
    note: PropTypes.object.isRequired
  };

  render() {
    const { note } = this.props;

    return (
      <p>
        <span>{note.title}</span>: {note.notes}, {note.completed} 
      </p>
    );
  }
}

export default NoteDisplay;