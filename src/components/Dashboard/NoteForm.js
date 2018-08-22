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
    editing: true,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, key } = this.state;
    const note = { title, content };
    if(key) note.key = key;

    this.props.onComplete(note)
      .then(() => {
        if(!key) return;
        this.setState({ title: '', content: '' });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.title]: target.value });
  };

  render() {
    const { key, title, content } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl title="title" value={title} onChange={this.handleChange}/>
        <InputControl title="content" value={content} onChange={this.handleChange}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onCLick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p>
    <label>
      {props.title}:
      <input { ...props} required/>
    </label>
  </p>
);

export default NoteForm;