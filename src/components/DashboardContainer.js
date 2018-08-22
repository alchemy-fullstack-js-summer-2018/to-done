import React, { Component } from 'react';
import NoteForm from './notes/NoteForm';

export default class DashboardContainer extends Component {

  state = {
    notes: null
  }

  render() {
    return (
      <div>
        <section>
          <h3>Make a Note!</h3>
          <NoteForm/>
        </section>
      </div>
    );
  }
}
