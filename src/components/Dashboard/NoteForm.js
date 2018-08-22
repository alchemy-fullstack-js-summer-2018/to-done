import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteForm extends Component {

  state = {
    editing: false,
    key: null,
    title: '',
    notes: '',
    completed: false
  };

  static propTypes = {
    note: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  componentDidMount() {
    const { note } = this.props;
    if(!note) return;

    this.setState(note);
  }

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

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { key, title, notes, completed } = this.state;
    const { onCancel } = this.props;

    return (
      <div>
        <h3>Add a note:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title:<input type="text" name="title" value={title} onChange={this.handleChange}></input></label>
          <label>Notes:<textarea rows="4" cols="50" name="notes" value={notes} onChange={this.handleChange}></textarea></label>
          <label>Completed:<input type="checkbox" name="completed" value={completed} onChange={this.handleChange}></input></label>
          <p>
            <button type="submit">Submit</button>
            {key && <button type="button" onClick={onCancel}>Cancel</button>}
          </p>
        </form>
      </div>
    );
  }
}

export default NoteForm;