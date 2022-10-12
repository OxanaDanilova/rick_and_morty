import Cards from 'components/Cards/Cards';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component } from 'react';
import Character from 'types';
//import imgArr from 'data/data';

interface MyState {
  dataArr: Character[];
}

export default class Home extends Component<unknown, MyState> {
  state = {
    dataArr: [],
  };
  changeArr = (newArr: Character[]) => {
    this.setState({ dataArr: newArr });
    console.log(this.state.dataArr);
  };
  render() {
    return (
      <>
        <Header pageName="Home page" />
        <main>
          <SearchBar changeArr={this.changeArr} />
          <Cards dataArr={this.state.dataArr} />
        </main>
      </>
    );
  }
}
