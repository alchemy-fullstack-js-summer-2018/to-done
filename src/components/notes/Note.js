import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoteForm from './NoteForm';
import NoteDisplay from './NoteDisplay';

class Note extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    note: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  handleComplete = note => {
    const { onUpdate } = this.props;
    return onUpdate(note).then(this.handleEndEdit);
  };

  render() {
    const { editing } = this.state;
    const { note } = this.props;

    return (
      <li>
        {editing
          ? <NoteForm
            note={note}
            onComplete={this.handleComplete}
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