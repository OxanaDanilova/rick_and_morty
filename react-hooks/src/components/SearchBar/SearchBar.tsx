import React, { useEffect, useRef } from 'react';
import { GoSearch } from 'react-icons/go';
import './SearchBar.css';
import Character from 'types';

type MyProps = {
  changeArr: (arr: Character[], hasError: boolean) => void;
  changeLoading: (isLoading: boolean) => void;
};

export default function SearchBar({ changeLoading, changeArr }: MyProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const getDataFromApi = async (url: string) => {
    try {
      changeLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      changeLoading(false);
      if (!data.results) {
        throw new Error();
      } else {
        changeArr(data.results, false);
      }
    } catch (error) {
      changeArr([], true);
    }
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      getDataFromApi(`https://rickandmortyapi.com/api/character/?name=${inputRef.current.value}`);
    }
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem('searchItem');
    const searchItem = inputRef.current;
    if (localStorageData && searchItem) {
      searchItem.value = localStorageData;
      getDataFromApi(`https://rickandmortyapi.com/api/character/?name=${localStorageData}`);
    } else {
      getDataFromApi(`https://rickandmortyapi.com/api/character`);
    }

    return () => {
      if (searchItem) {
        localStorage.setItem('searchItem', searchItem.value);
      }
    };
  }, []);

  return (
    <form className="search-form" onSubmit={(e) => submitForm(e)}>
      <GoSearch className="search-icon" />
      <input type="text" name="search" ref={inputRef} placeholder="Search" />
    </form>
  );
}
