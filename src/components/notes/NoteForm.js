import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class NoteForm extends Component {

  state = {
    editing: false,
    title: '',
    content: '',
    completed: false
  };

  componentDidMount() {
    console.log('mounted!');
  }

  render() {
    const { title, content } = this.state;

    return (

      <form>
        <InputControl name="title" value={title}/>
        <InputControl name="content" value={content}/>
        <p>
          <button type="submit">Submit</button>
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