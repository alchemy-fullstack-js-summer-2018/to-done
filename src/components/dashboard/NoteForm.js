import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteForm extends Component {

  state = {
    completed: false,
    title: '',
    content:''
  };

  static propTypes = {
    note: PropTypes.object
  };

  // componentDidMount() {
  //   const { note } = this.props;
  //   if(!note) return;

  //   this.setState(note);
  // }

  render() {

    const { title, content } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="title" value={title}/* onChange={this.handleChange}*//>
        <InputControl name="content" value={content}/* onChange={this.handleChange}*//>
        <p>
          <button type="submit">Add</button>
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