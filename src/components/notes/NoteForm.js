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
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, key } = this.state;
    if(!title) return;
    const note = { title, content };
    if(key) note.key = key;
    console.log(note);
    this.props.onComplete(note)
      .then(() => {
        if(!key) return;
        this.setState({ title: '', content: '' });
      });
  };

  render() {
    const { editing, title, content } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {editing ?
          <p>Editing Note</p>
          : <p>Adding New Note</p>
        }
        <input name="title" value={title} onChange={this.handleChange}/>
        <textarea name="content" rows="2" cols="30" value={content} onChange={this.handleChange}/>
        <button>Submit</button>
      </form>

    );
  }
}

export default NoteForm;