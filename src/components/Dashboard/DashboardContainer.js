import React, { Component } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import styles from './Note.css';
import { 
  getNotes,
  addNote } from '../../services/notesApi';

class DashboardContainer extends Component {

  state = {
    note: null,
  };

  componentDidMount() {
    getNotes()
      .then(notes => {
        this.setState({ notes });
      });
  }

  handleAdd = note => {
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
      <div>
        <section>
          <h2>Add A Note:</h2>
          <NoteForm onComplete={this.handleAdd}/>
        </section>

        {notes &&
          <section>
            <h3>Your Notes:</h3>
            <div className={styles.note}>
              <NoteList
                notes={notes}
              />
            </div>
          </section>
        }
      </div>
    );
  }
}

export default DashboardContainer; 
