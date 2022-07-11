import React, { useRef } from 'react';
import styles from './search_bar.module.css';

const SearchBar = (props) => {
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    props.onSearch(inputRef.current.value);
  };

  return (
    <form className={styles.searchbar} onSubmit={onSubmit}>
      <img className={styles.logo} src='/images/logo.png' alt='logo' />
      <div className={styles.search}>
        <input
          ref={inputRef}
          className={styles.input}
          type='search'
          placeholder='검색'
        ></input>
        <button className={styles.button}>
          <i className={`fa-solid fa-magnifying-glass ${styles.icon}`}></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
