import React, { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import './SearchBar.css';
import Character from 'types';

type MyProps = {
  changeArr: (arr: Character[]) => void;
};

export default class SearchBar extends Component<MyProps> {
  state = {
    searchItem: '',
  };

  submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    /* 'https://rickandmortyapi.com/api/character' */
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${this.state.searchItem}`
    );
    const data = await response.json();
    this.props.changeArr(data.results);
    console.log(data.results);
  };

  componentDidMount() {
    if (localStorage.getItem('searchItem')) {
      this.setState({ searchItem: localStorage.getItem('searchItem') });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchItem', this.state.searchItem);
  }

  render() {
    return (
      <form className="search-form" onSubmit={(e) => this.submitForm(e)}>
        <GoSearch className="search-icon" />
        <input
          type="text"
          value={this.state.searchItem}
          placeholder="Search"
          onChange={(e) => {
            this.setState({ searchItem: e.target.value });
          }}
        />
      </form>
    );
  }
}
