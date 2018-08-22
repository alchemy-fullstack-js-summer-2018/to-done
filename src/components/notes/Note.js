import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoteDisplay from './NoteDisplay';
import NoteForm from './NoteForm';

export default class Note extends Component {
  
  state = {
    editing: true
  };

  static propTypes = {
    note: PropTypes.object.isRequired
  }

  handleEdit = () => {
    this.setState({ editing: edit })
  }

  handleEndEdit = () => {
    this.setState({ editing: false });
  }

  render() {

    const { editing } = this.state;
    const { note } = this.props;

    return (
     <li>
       {editing
        ? <NoteForm note={note}/>
        : <NoteDisplay note={note}/>
      }
     </li>
    );
  }
}
