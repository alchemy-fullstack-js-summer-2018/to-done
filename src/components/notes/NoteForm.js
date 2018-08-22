import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteForm extends Component {
  state = {
    editing: false,
    key: null,
    title: '',
    content: ''
  };

  static propTypes = {
    note: PropTypes.object,
    onComplete: PropTypes.func,
    onCancel: PropTypes.func
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, key } = this.state;
    const note = { title, content };
    if(key) note.key = key;
    console.log(note);
    this.props.onComplete(note);
  };

  render() {
    const { title, content } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" value={title} onChange={this.handleChange}/>
        <textarea name="content" rows="4" cols="50" value={content} onChange={this.handleChange}/>
        <button>Submit</button>
      </form>

    );
  }
}

export default NoteForm;