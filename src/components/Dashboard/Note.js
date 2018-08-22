import React, { Component } from 'react';
import NoteDisplay from './NoteDisplay';
import NoteForm from './NoteForm';
import PropTypes from 'prop-types';

class Note extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    note: PropTypes.object.isRequired,
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { note } = this.props;

    return (
      <li>
        {editing
          ? <NoteForm 
            note={note}
            onCancel={this.handleEndEdit}
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