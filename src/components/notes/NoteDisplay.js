import React, { Component } from 'react';

class NoteDisplay extends Component {
  render() {
    return (
      <div>
        <h4>TITLE</h4>
        <p>content</p>
        <input type="checkbox"/>
      </div>
    );
  }
}

export default NoteDisplay;