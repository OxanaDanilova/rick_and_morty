import Cards from 'components/Cards/Cards';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';

export default function Home() {
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
