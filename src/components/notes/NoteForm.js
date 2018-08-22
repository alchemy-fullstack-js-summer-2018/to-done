import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteForm extends Component {
  state = {
    key: null,
    title: '',
    content: '',
    completed: false
  };

  static propTypes = {
    note: PropTypes.object,
    onComplete: PropTypes.func,
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
    const { title, content, key, completed } = this.state;
    if(!title) return;
    const note = { title, content, completed };
    if(key) note.key = key;
    this.props.onComplete(note);
  };

  render() {
    const { key, title, content } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {!key &&
          <h3>Adding New Note</h3>
        }
        <input name="title" value={title} onChange={this.handleChange}/>
        <textarea name="content" rows="2" cols="30" value={content} onChange={this.handleChange}/>
        <button>Submit</button>
      </form>

    );
  }
}

export default NoteForm;