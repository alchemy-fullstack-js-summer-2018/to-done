import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoteForm from './NoteForm';
import NoteDisplay from './NoteDisplay';

class Note extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    note: PropTypes.object.isRequired
  };

  handleEdit = () => {
    this.setState({ editing: true });
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
            onEdit={this.handleEdit}
          />
        }
      </li>
    );
  }
}

export default Note;