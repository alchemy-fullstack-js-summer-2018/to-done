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
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { key, title, content } = this.state;
    const { onCancel } = this.props;

    return (
      <form className="note-form" onSubmit={this.handleSubmit}>
        <InputControl name="title" value={title} onChange={this.handleChange}/>
        <InputControl id="content-box" name="content" value={content} onChange={this.handleChange}/>
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

export default NoteForm;