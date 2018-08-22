import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class DashboardContainer extends Component {

  state = { 
    noteList: null
  };

  render() { 
    const { noteList } = this.state;
    return (
      <div>
        <section>
          <h3>Add a ToDo</h3>
          <NoteForm/>
        </section>

        {noteList &&
          <section>
            <h3>ToDos</h3>
            <NoteList
              noteList={noteList}
            />
          </section>
        }
      </div>
    );
  }
}
 
export default DashboardContainer;