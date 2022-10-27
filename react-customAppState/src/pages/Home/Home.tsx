import Cards from 'components/Cards/Cards';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { useState, useContext } from 'react';
import Character from 'types';
import { AppContext } from 'App';

export default function Home() {
  const myContext = useContext(AppContext);
  const { dataArr, setDataArr } = myContext;
  console.log('context', myContext);

  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const changeArr = (newArr: Character[], hasError: boolean) => {
    console.log(newArr);
    setDataArr(newArr);
    setHasError(hasError);
  };
  const changeLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  return (
    <>
      <Header pageName="Home page" />
      <main>
        <SearchBar changeArr={changeArr} changeLoading={changeLoading} />
        <Cards dataArr={dataArr} hasError={hasError} isLoading={isLoading} />
      </main>
    </>
  );
}
