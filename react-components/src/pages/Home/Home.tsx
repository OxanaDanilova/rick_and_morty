import Cards from 'components/Cards/Cards';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header pageName="Home page" />
        <main>
          <SearchBar />
          <Cards />
        </main>
      </>
    );
  }
}
