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
        <h4>{note.title}</h4>
        <p>{note.content}</p>
        <input type="checkbox"/>
      </div>
    );
  }
}

export default NoteDisplay;