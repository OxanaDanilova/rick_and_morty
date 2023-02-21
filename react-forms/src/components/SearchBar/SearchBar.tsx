import React, { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import './SearchBar.css';

export default class SearchBar extends Component {
  state = {
    searchItem: '',
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
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
