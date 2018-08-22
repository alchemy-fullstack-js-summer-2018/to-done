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
    onUpdate: PropTypes.func.isRequired
  };

  handleEdit = () => this.setState(({ editing }) => ({ editing: !editing }));
  handleCheckChange = note => {
    const { onUpdate } = this.props;
    const { completed } = note;
    note.completed = !completed;
    return onUpdate(note);
  };

  handleComplete = note => {
    const { onUpdate } = this.props;
    return onUpdate(note).then(this.handleEdit);
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
            onCancel={this.handleEdit}
          />
          : <NoteDisplay
            note={note}
            onEdit={this.handleEdit}
            onCheckChange={this.handleCheckChange}
          />
        
        }
      </li>
    );
  }
}

export default Note;