import React, { useEffect, useRef, useContext } from 'react';
import { GoSearch } from 'react-icons/go';
import './SearchBar.css';
import { AppContext } from 'App';
import Character from 'types';

export default function SearchBar() {
  const myContext = useContext(AppContext);
  const { state, dispatch } = myContext;

  const inputRef = useRef<HTMLInputElement>(null);

  const paginationHandle = (direction: string) => {
    if (state.info && direction === 'next' && state.info.next) {
      dispatch({ type: 'currentPage', payload: { ...state, currentPage: state.currentPage + 1 } });
      getDataFromApi(state.info.next);
    } else if (state.info && direction === 'prev' && state.info.prev) {
      dispatch({ type: 'currentPage', payload: { ...state, currentPage: state.currentPage - 1 } });
      getDataFromApi(state.info.prev);
    }
  };

  const getDataFromApi = async (url: string) => {
    try {
      dispatch({ type: 'isLoading', payload: { ...state, isLoading: true } });
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: 'info', payload: { ...state, info: data.info } });
      dispatch({ type: 'allPages', payload: { ...state, allPages: data.info.pages } });
      dispatch({ type: 'isLoading', payload: { ...state, isLoading: false } });
      if (!data.results) {
        throw new Error();
      } else {
        dispatch({ type: 'search-cards', payload: { ...state, dataArr: [...data.results] } });
        dispatch({ type: 'hasError', payload: { ...state, hasError: false } });
        dispatch({ type: 'unsorted-cards', payload: { ...state, dataArr: [...data.results] } });
        if (state.sorting) {
          sortCards(state.sorting, data.results);
        }
      }
    } catch (error) {
      dispatch({ type: 'search-cards', payload: { ...state, dataArr: [] } });
      dispatch({ type: 'hasError', payload: { ...state, hasError: true } });
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
      if (!state.dataArr.length) {
        getDataFromApi(`https://rickandmortyapi.com/api/character/?name=${localStorageData}`);
      }
    } else {
      getDataFromApi(`https://rickandmortyapi.com/api/character`);
    }

    return () => {
      if (searchItem) {
        localStorage.setItem('searchItem', searchItem.value);
      }
    };
  }, []);

  const sortCards = (sorting: string, arr: Character[]) => {
    switch (sorting) {
      case 'Name A-Z': {
        const sortedData = arr.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        console.log('sorted data', sortedData);
        dispatch({ type: 'search-cards', payload: { ...state, dataArr: [...sortedData] } });
        dispatch({ type: 'hasError', payload: { ...state, hasError: false } });
        break;
      }

      case 'Name Z-A': {
        const sortedData = arr.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        dispatch({ type: 'search-cards', payload: { ...state, dataArr: [...sortedData] } });
        dispatch({ type: 'hasError', payload: { ...state, hasError: false } });
        break;
      }
      case 'Species A-Z': {
        const sortedData = arr.sort((a, b) => {
          if (a.species < b.species) {
            return -1;
          }
          if (a.species > b.species) {
            return 1;
          }
          return 0;
        });
        dispatch({ type: 'search-cards', payload: { ...state, dataArr: [...sortedData] } });
        dispatch({ type: 'hasError', payload: { ...state, hasError: false } });
        break;
      }

      case 'Species Z-A': {
        const sortedData = arr.sort((a, b) => {
          if (a.species > b.species) {
            return -1;
          }
          if (a.species > b.species) {
            return 1;
          }
          return 0;
        });
        dispatch({ type: 'search-cards', payload: { ...state, dataArr: [...sortedData] } });
        dispatch({ type: 'hasError', payload: { ...state, hasError: false } });
        break;
      }
      case 'Status A-Z': {
        const sortedData = arr.sort((a, b) => {
          if (a.status < b.status) {
            return -1;
          }
          if (a.status > b.status) {
            return 1;
          }
          return 0;
        });

        dispatch({ type: 'search-cards', payload: { ...state, dataArr: [...sortedData] } });
        dispatch({ type: 'hasError', payload: { ...state, hasError: false } });
        break;
      }

      case 'Status Z-A': {
        const sortedData = arr.sort((a, b) => {
          if (a.status > b.status) {
            return -1;
          }
          if (a.status > b.status) {
            return 1;
          }
          return 0;
        });
        dispatch({ type: 'search-cards', payload: { ...state, dataArr: [...sortedData] } });
        dispatch({ type: 'hasError', payload: { ...state, hasError: false } });
        break;
      }
      default:
        break;
    }
  };

  const handleSort = (e: React.FormEvent) => {
    const target = e.target as HTMLSelectElement;
    if (target && target.value) {
      dispatch({ type: 'sorting', payload: { ...state, sorting: target.value } });
      sortCards(target.value, state.unsortedCards);
    }
  };

  const changeCardsPerPage = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value) {
      dispatch({ type: 'cardsPerPage', payload: { ...state, cardsPerPage: +target.value } });
      const calcAllPages = state.info && Math.ceil(state.info.count / +target.value);
      calcAllPages && dispatch({ type: 'allPages', payload: { ...state, allPages: calcAllPages } });
      const newArrNumb = [];
      for (let i = 1; i <= state.cardsPerPage; i++) {
        const newItem = state.cardsPerPage * (state.currentPage - 1) + i;
        newArrNumb.push(newItem);
      }
      console.log(newArrNumb);
    }
  };
  const changeAllPages = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value) {
      dispatch({ type: 'allPages', payload: { ...state, allPages: +target.value } });
      const calcCardsPerPage = state.info && Math.ceil(state.info.count / +target.value);
      calcCardsPerPage &&
        dispatch({ type: 'cardsPerPage', payload: { ...state, cardsPerPage: calcCardsPerPage } });
    }
  };

  const changeCurrentPage = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value) {
      dispatch({ type: 'currentPage', payload: { ...state, currentPage: +target.value } });
      if (inputRef.current) {
        getDataFromApi(
          `https://rickandmortyapi.com/api/character/?page=${+target.value}&name=${
            inputRef.current.value
          }`
        );
      }
    }
  };

  return (
    <>
      <form className="search-form" onSubmit={(e) => submitForm(e)}>
        <GoSearch className="search-icon" />
        <input type="text" name="search" ref={inputRef} placeholder="Search" />
      </form>
      <section className="panel-wrapper">
        <div className="sorting-wrapper">
          <label htmlFor="sort">Sorting by</label>
          <select id="sort" onChange={(e) => handleSort(e)} value={state.sorting}>
            <option></option>
            <option>Name A-Z</option>
            <option>Name Z-A</option>
            <option>Species A-Z</option>
            <option>Species Z-A</option>
            <option>Status A-Z</option>
            <option>Status Z-A</option>
          </select>
        </div>
        <div className="pagination-wrapper">
          <button
            disabled={state.info && state.info.prev ? false : true}
            onClick={() => paginationHandle('prev')}
          >
            Prev
          </button>
          <input
            type="number"
            name="currentPage"
            id="currentPage"
            value={state.currentPage}
            max={state.allPages}
            min={1}
            onChange={(e) => changeCurrentPage(e)}
          />
          <button
            disabled={state.info && state.info.next ? false : true}
            onClick={() => paginationHandle('next')}
          >
            Next
          </button>
        </div>
        <div>
          <label htmlFor="allPages">All pages</label>
          <input
            type="number"
            id="allPages"
            name="allPages"
            value={state.allPages}
            max={state.info && state.info.count ? state.info.count : 1}
            onChange={(e) => changeAllPages(e)}
          />
          <label htmlFor="cardsPerPage">Cards per page</label>
          <input
            type="number"
            name="cardsPerPage"
            id="cardsPerPage"
            min={1}
            max={20}
            value={state.cardsPerPage}
            onChange={(e) => changeCardsPerPage(e)}
          />
        </div>
      </section>
    </>
  );
}
