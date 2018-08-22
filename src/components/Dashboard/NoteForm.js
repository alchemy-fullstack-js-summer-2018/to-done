import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteForm extends Component {

  state = {
    key: null,
    title: '',
    notes: '',
    completed: false
  };

  static propTypes = {
    note: PropTypes.object,
    onComplete: PropTypes.func.isRequired
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { key, title, notes, completed } = this.state;
    const note = { title, notes, completed };
    if(key) note.key = key;

    this.props.onComplete(note)
      .then(() => {
        if(!key) return;
        this.setState({ title: '', notes: '', completed: false });
      });
  };

  render() {

    return (
      <div>
        <h3>I am the note form</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title:<input type="text" name="title"></input></label>
          <label>Notes:<textarea rows="4" cols="50" name="notes"></textarea></label>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default NoteForm;