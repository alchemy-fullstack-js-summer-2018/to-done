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
    const { title, content, key, completed } = this.state;
    if(!title) return;
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
        {!key &&
          <h3>Adding New Note</h3>
        }
        <input name="title" value={title} onChange={this.handleChange}/>
        <textarea name="content" rows="2" cols="30" value={content} onChange={this.handleChange}/>
        {key && <button type="button" onClick={onCancel}>Cancel</button>}
        <button type="submit">{ key ? 'Save' : 'Post' }</button>
      </form>

    );
  }
}

export default NoteForm;