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
        {note.title} the {note.content}
        More placeholder
      </p>
    );
  }
}
 
export default NoteDisplay;