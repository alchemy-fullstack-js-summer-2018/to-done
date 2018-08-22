import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoteDisplay from './NoteDisplay';
import NoteForm from './NoteForm';

class Note extends Component {
  state = {
    editing: false
  };

  static propTypes = {
    note: PropTypes.object.isRequired
  };

  render() { 
    const { editing } = this.state;
    const { note } = this.props;

    return (
      <li>
        {editing
          ? <NoteForm
            note={note}
          />
          : <NoteDisplay
            note={note}
          />
        }
      </li>
    );
  }
}
 
export default Note;