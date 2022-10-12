import Cards from 'components/Cards/Cards';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component } from 'react';
import imgArr from 'data/data';

export default class Home extends Component {
  state = {
    dataArr: [],
  };
  changeArr = (newArr: unknown) => {
    this.setState({ dataArr: newArr });
    console.log(this.state.dataArr);
  };
  render() {
    return (
      <>
        <Header pageName="Home page" />
        <main>
          <SearchBar changeArr={this.changeArr} />
          {/* <Cards imgArr={this.state.dataArr} /> */}
        </main>
      </>
    );
  }
}
