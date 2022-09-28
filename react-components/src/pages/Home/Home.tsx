import Cards from 'components/Cards/Cards';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Home</h1>
        </header>
        <main>
          <SearchBar />
          <Cards />
        </main>
      </>
    );
  }
}
