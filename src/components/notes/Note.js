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

  handleComplete = note => {
    const { onUpdate } = this.props;
    console.log('updating', note);
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
          />
        
        }
      </li>
    );
  }
}

export default Note;