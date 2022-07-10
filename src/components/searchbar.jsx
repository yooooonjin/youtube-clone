import React, { Component } from 'react';
import logo from '../img/logo.png';
import styles from './searchbar.module.css';

class Searchbar extends Component {
  render() {
    return (
      <form className={styles.searchbar}>
        <img className={styles.logo} src={logo} alt='logo' />
        <div className={styles.search}>
          <input className={styles.input} type='text'></input>
          <button className={styles.button}>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
        </div>
      </form>
    );
  }
}

export default Searchbar;
