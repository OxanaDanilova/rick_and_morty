import Cards from 'components/Cards/Cards';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component } from 'react';
import Character from 'types';

interface MyState {
  dataArr: Character[];
  hasError: boolean;
  isLoading: boolean;
}

export default class Home extends Component<unknown, MyState> {
  state = {
    dataArr: [],
    hasError: false,
    isLoading: false,
  };
  changeArr = (newArr: Character[], hasError: boolean) => {
    this.setState({ dataArr: newArr, hasError: hasError });
  };
  changeLoading = (isLoading: boolean) => {
    this.setState({ ...this.state, isLoading: isLoading });
  };
  render() {
    return (
      <>
        <Header pageName="Home page" />
        <main>
          <SearchBar changeArr={this.changeArr} changeLoading={this.changeLoading} />
          <Cards
            dataArr={this.state.dataArr}
            hasError={this.state.hasError}
            isLoading={this.state.isLoading}
          />
        </main>
      </>
    );
  }
}
