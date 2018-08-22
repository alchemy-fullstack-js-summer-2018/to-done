import React, { Component } from 'react';
import NoteForm from './NoteForm';
import { getNotes, addNotes } from '../../services/notesApi';

class DashboardContainer extends Component {

  state = {
    notes: []
  };

  handleAdd = note => {
    return addNotes(note)
      .then(added => {
        this.setState(({ notes }) => {
          return {
            notes: [...notes, added]
          };
        });
      });
  };

  render() {
    // const { notes } = this.state;

    return (
      <div>
        <section>
          <h3>Add Notes</h3>
          <NoteForm onComplete={this.handleAdd}/>
        </section>

        {/* {notes &&
        <section>
          <h3>Notes</h3>
          <Notes
            notes={notes}
            onUpdate={this.handleUpdate}
            onRemove={this.handleRemove}
          />
        </section>
        } */}
      </div>
    );
  }
}

export default DashboardContainer;