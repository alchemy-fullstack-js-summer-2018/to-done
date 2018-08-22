import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteDisplay extends Component {

  static propTypes = {
    note: PropTypes.object.isRequired
  };
  
  render() {
    const { note } = this.props;

    return (
      <div>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <p>Completed? {note.completed}</p>
      </div>
    );
  }
}
 
export default NoteDisplay;