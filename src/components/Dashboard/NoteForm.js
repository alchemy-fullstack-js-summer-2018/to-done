import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class NoteForm extends Component {

  render() {

    return (
      <div>
        <h3>I am the note form</h3>
        <form onSubmit={this.handleSubmit}>
          {/* <InputControl name="title" value="" />
          <InputControl name="notes" value="" /> */}
          <label>Title:<input type="text"></input></label>
          <label>Notes:<textarea rows="4" cols="50"></textarea></label>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

// const InputControl = (props) => (
//   <p>
//     <label>
//       {props.name}:
//       <input {...props} required />
//     </label>
//   </p>
// );

export default NoteForm;