import React, { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import './SearchBar.css';
import Character from 'types';

type MyProps = {
  changeArr: (arr: Character[], hasError: boolean) => void;
  changeLoading: (isLoading: boolean) => void;
};

export default class SearchBar extends Component<MyProps> {
  state = {
    searchItem: '',
  };

  getDataFromApi = async (url: string) => {
    try {
      this.props.changeLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      this.props.changeLoading(false);
      if (!data.results) {
        throw new Error();
      } else {
        this.props.changeArr(data.results, false);
      }
    } catch (error) {
      this.props.changeArr([], true);
    }
  };

  submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    await this.getDataFromApi(
      `https://rickandmortyapi.com/api/character/?name=${this.state.searchItem}`
    );
  };

  componentDidMount() {
    if (localStorage.getItem('searchItem')) {
      this.setState({ searchItem: localStorage.getItem('searchItem') });
    }
    this.getDataFromApi(`https://rickandmortyapi.com/api/character`);
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
