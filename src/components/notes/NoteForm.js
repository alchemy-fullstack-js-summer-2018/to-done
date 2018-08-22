import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NoteForm extends Component {

  state = {
    editing: false,
    key: null,
    title: '',
    message: ''
  };

  static propTypes = {
    note: PropTypes.object,
    onCancel: PropTypes.func,
    onComplete: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { note } = this.props;
    if(!note) return;
    
    this.setState(note);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, message, key } = this.state;
    const note = { title, message };
    if(key) note.key = key;

    this.props.onComplete(note)
      .then(() => {
        if(!key) return;
        this.setState({ title: '', message: '' });
      });

  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { key, title, message } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="title" value={title} onChange={this.handleChange}/>
        <InputControl name="message" value={message} onChange={this.handleChange}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = (props) => {
  return (
    <p>
      <label>
        {props.title}
        <input {...props} required/>
      </label>
    </p>
  );
};

export default NoteForm;
