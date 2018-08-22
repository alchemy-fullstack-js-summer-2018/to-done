import React, { Component } from 'react';
import Notes from './Notes.js';
import NoteForm from './NoteForm.js';

class Dashboard extends Component {
  state = {
    notes: null
  };

  componentDidMount() {
    console.log('getting notes...');
  }

  render() {

    return (
      <div>
        <h3>Dashboard</h3>
        <section>
          <NoteForm/>
        </section>
        <section>
          <Notes/>
        </section>
      </div>
    );
  }
}

export default Dashboard;