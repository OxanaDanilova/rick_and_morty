import React, { useEffect, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import './SearchBar.css';
import Character from 'types';

type Info = {
  count: number;
  next: null | string;
  pages: number;
  prev: null | string;
};

type MyProps = {
  changeArr: (arr: Character[], hasError: boolean) => void;
  changeLoading: (isLoading: boolean) => void;
};

export default function SearchBar({ changeLoading, changeArr }: MyProps) {
  const [info, setInfo] = useState<Info | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeInfo = (resp: Info) => {
    setInfo(resp);
    console.log('response:', resp);
  };

  const paginationHandle = (direction: string) => {
    if (info && direction === 'next' && info.next) {
      getDataFromApi(info.next);
    } else if (info && direction === 'prev' && info.prev) {
      getDataFromApi(info.prev);
    }
  };

  const getDataFromApi = async (url: string) => {
    try {
      changeLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      changeInfo(data.info);
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
    <>
      <form className="search-form" onSubmit={(e) => submitForm(e)}>
        <GoSearch className="search-icon" />
        <input type="text" name="search" ref={inputRef} placeholder="Search" />
      </form>
      <div className="pagination-wrapper">
        <button
          disabled={info && info.prev ? false : true}
          onClick={() => paginationHandle('prev')}
        >
          Prev
        </button>
        <input type="number" name="currentPage" id="" />
        <button
          disabled={info && info.next ? false : true}
          onClick={() => paginationHandle('next')}
        >
          Next
        </button>
      </div>
    </>
  );
}
