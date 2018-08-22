import React, { Component } from 'react';
import NoteForm from  './NoteForm';
import styles from './Notes.css';

class DashboardContainer extends Component {

  state = {
    notes: null
  };

  componentDidMount() {
    console.log('component did mount!');
  }

  addNote(note) {
    console.log('note added', note);
  }

  render() {

    return (
      <div className={styles.notes}>
        <h2>Welcome to the Dashboard!</h2>

        <NoteForm/>
      </div>
    );
  }
}

export default DashboardContainer;