import React, { Component } from 'react';
import NoteForm from  './NoteForm';
import NoteList from  './NoteList';
import styles from './Notes.css';
import { addNote, getNotes/* , updateNote, removeNote */ } from '../../services/notesApi';

class DashboardContainer extends Component {

  state = {
    notes: null
  };

  componentDidMount() {
    console.log('component did mount!');
    getNotes()
      .then(notes => {
        this.setState({ notes });
      });
  }

  handleAddNote = note => {
    console.log('note added', note);
    return addNote(note)
      .then(added => {
        this.setState(({ notes }) => {
          return {
            notes: [...notes, added]
          };
        });
      });
  };

  render() {
    const { notes } = this.state;

    return (
      <div className={styles.notes}>
        <h2>Welcome to the Dashboard!</h2>

        <section>
          <NoteForm onComplete={this.handleAddNote}/>
        </section>

        {notes &&
          <section>
            <NoteList 
              notes={notes}
            />
          </section>
        }
      </div>
    );
  }
}

export default DashboardContainer;