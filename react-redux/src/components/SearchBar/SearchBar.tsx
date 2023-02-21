import React, { useEffect, useRef } from 'react';
import { GoSearch } from 'react-icons/go';
import './SearchBar.css';
import { Character, MyStateSearch, MyStateForm } from 'types';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hook';

import {
  searchCards,
  setError,
  setSorting,
  setCurrentPage,
  setCardsPerPage,
  setAllPages,
} from '../../cardsSlice';
import { fetchCards } from 'cardsSlice';

export default function SearchBar() {
  const dataArr = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.cards.dataArr
  );
  const info = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.cards.info
  );
  const currentPage = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.cards.currentPage
  );
  const allPages = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.cards.allPages
  );
  const cardsPerPage = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.cards.cardsPerPage
  );
  const sorting = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.cards.sorting
  );
  const unsortedCards = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.cards.unsortedCards
  );
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const paginationHandle = (direction: string) => {
    if (info && direction === 'next' && info.next) {
      dispatch(setCurrentPage(currentPage + 1));
      dispatch(fetchCards(info.next));
    } else if (info && direction === 'prev' && info.prev) {
      dispatch(setCurrentPage(currentPage - 1));
      dispatch(fetchCards(info.prev));
    }
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      dispatch(
        fetchCards(`https://rickandmortyapi.com/api/character/?name=${inputRef.current.value}`)
      );
    }
  };

  useEffect(() => {
    if (sorting) {
      sortCards(sorting, unsortedCards);
    }
  }, [unsortedCards]);

  useEffect(() => {
    const localStorageData = localStorage.getItem('searchItem');
    const searchItem = inputRef.current;
    if (localStorageData && searchItem) {
      searchItem.value = localStorageData;
      if (!dataArr.length) {
        dispatch(fetchCards(`https://rickandmortyapi.com/api/character/?name=${localStorageData}`));
      }
    } else {
      dispatch(fetchCards(`https://rickandmortyapi.com/api/character`));
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
        const sortedData = [...arr].sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        dispatch(searchCards([...sortedData]));
        dispatch(setError(false));
        break;
      }

      case 'Name Z-A': {
        const sortedData = [...arr].sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        dispatch(searchCards([...sortedData]));
        dispatch(setError(false));
        break;
      }
      case 'Species A-Z': {
        const sortedData = [...arr].sort((a, b) => {
          if (a.species < b.species) {
            return -1;
          }
          if (a.species > b.species) {
            return 1;
          }
          return 0;
        });
        dispatch(searchCards([...sortedData]));
        dispatch(setError(false));
        break;
      }

      case 'Species Z-A': {
        const sortedData = [...arr].sort((a, b) => {
          if (a.species > b.species) {
            return -1;
          }
          if (a.species > b.species) {
            return 1;
          }
          return 0;
        });
        dispatch(searchCards([...sortedData]));
        dispatch(setError(false));
        break;
      }
      case 'Status A-Z': {
        const sortedData = [...arr].sort((a, b) => {
          if (a.status < b.status) {
            return -1;
          }
          if (a.status > b.status) {
            return 1;
          }
          return 0;
        });

        dispatch(searchCards([...sortedData]));
        dispatch(setError(false));
        break;
      }

      case 'Status Z-A': {
        const sortedData = [...arr].sort((a, b) => {
          if (a.status > b.status) {
            return -1;
          }
          if (a.status > b.status) {
            return 1;
          }
          return 0;
        });
        dispatch(searchCards([...sortedData]));
        dispatch(setError(false));
        break;
      }
      default:
        break;
    }
  };

  const handleSort = (e: React.FormEvent) => {
    const target = e.target as HTMLSelectElement;
    if (target && target.value) {
      dispatch(setSorting(target.value));
      sortCards(target.value, unsortedCards);
    }
  };

  const changeCardsPerPage = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value) {
      dispatch(setCardsPerPage(+target.value));
      const calcAllPages = info && Math.ceil(info.count / +target.value);
      calcAllPages && dispatch(setAllPages(calcAllPages));
      const newArrNumb = [];
      for (let i = 1; i <= cardsPerPage; i++) {
        const newItem = cardsPerPage * (currentPage - 1) + i;
        newArrNumb.push(newItem);
      }
    }
  };
  const changeAllPages = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value) {
      dispatch(setAllPages(+target.value));
      const calcCardsPerPage = info && Math.ceil(info.count / +target.value);
      calcCardsPerPage && dispatch(setCardsPerPage(calcCardsPerPage));
    }
  };

  const changeCurrentPage = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value) {
      dispatch(setCurrentPage(+target.value));
      if (inputRef.current) {
        dispatch(
          fetchCards(
            `https://rickandmortyapi.com/api/character/?page=${+target.value}&name=${
              inputRef.current.value
            }`
          )
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
          <select id="sort" onChange={(e) => handleSort(e)} value={sorting}>
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
            disabled={info && info.prev ? false : true}
            onClick={() => paginationHandle('prev')}
          >
            Prev
          </button>
          <input
            type="number"
            name="currentPage"
            id="currentPage"
            value={currentPage}
            max={allPages}
            min={1}
            onChange={(e) => changeCurrentPage(e)}
          />
          <button
            disabled={info && info.next ? false : true}
            onClick={() => paginationHandle('next')}
          >
            Next
          </button>
        </div>
        {/*  <div>
          <label htmlFor="allPages">All pages</label>
          <input
            type="number"
            id="allPages"
            name="allPages"
            value={allPages}
            max={info && info.count ? info.count : 1}
            onChange={(e) => changeAllPages(e)}
          />
          <label htmlFor="cardsPerPage">Cards per page</label>
          <input
            type="number"
            name="cardsPerPage"
            id="cardsPerPage"
            min={1}
            max={20}
            value={cardsPerPage}
            onChange={(e) => changeCardsPerPage(e)}
          />
        </div> */}
      </section>
    </>
  );
}
