import React, { Component } from 'react';

export default class DashboardContainer extends Component {

  state = {
    notes: null
  }

  render() {
    return (
      <div>
        <section>
          <h3>Make a Note!</h3>
        </section>
      </div>
    );
  }
}
