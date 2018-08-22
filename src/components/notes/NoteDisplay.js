import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NoteDisplay extends Component {
  
  static propTypes = {
    note: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <p>{note.title}</p>
        <p>{note.content}</p>
      </div>
    );
  }
}
