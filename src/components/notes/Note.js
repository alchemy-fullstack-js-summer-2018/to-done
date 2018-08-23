import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoteDisplay from './NoteDisplay';
import NoteForm from './NoteForm';

class Note extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    note: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  handleDelete =() => {
    const { note, onRemove } = this.props;
    return onRemove(note.key);
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
            onDelete={this.handleDelete}
          />
        }
      </li>
    );
  }
}

export default Note;