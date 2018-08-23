import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteForm extends Component {

  state = {
    title: '',
    content: '',
    key: null,
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

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, completed, key } = this.state;
    const note = { title, content, completed };
    if(key) note.key = key;

    this.props.onComplete(note)
      .then(note => {
        if(key || !note.key) return;
        this.setState({ title: '', content: '' });
      });
  };

  render() {
    const { key, title, content } = this.state;
    const { onCancel } = this.props;

    return (

      <form onSubmit={this.handleSubmit}>
        <label>
          Title:&nbsp;
          <input name="title" value={title} onChange={this.handleChange}></input>
        </label>
        <br/>
        <label>
          Content:&nbsp;<br/>
          <textarea name="content" value={content} rows="3" cols="40" onChange={this.handleChange}></textarea>
        </label>
        <p>
          <button type="submit">Submit</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

export default NoteForm;