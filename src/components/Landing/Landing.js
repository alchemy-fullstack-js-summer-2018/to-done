import React, { Component } from 'react';
import styles from './Landing.css';

class Landing extends Component {

  render() {

    return (
      <section className={styles.landing}>
        <h2>Landing Component</h2>
        <p>Welcome to the To Done Notes App!</p>
      </section>
    );
  }
}

export default Landing;