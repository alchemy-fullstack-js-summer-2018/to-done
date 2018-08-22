import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NoteForm extends Component {

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

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, key, completed } = this.state;
    const note = { title, content, completed };
    if(key) note.key = key;

    this.props.onComplete(note)
      .then(() => {
        if(key || !note.key) return;
        this.setState({ title: '', content: '', completed: false });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {

    const { key, title, content } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="title" value={title} onChange={this.handleChange}/>
        <InputControl name="content" value={content} onChange={this.handleChange} style={{ width: 300 + 'px', height: 100 + 'px' }}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);