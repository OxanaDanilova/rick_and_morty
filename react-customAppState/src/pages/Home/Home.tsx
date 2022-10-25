import Cards from 'components/Cards/Cards';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { useState } from 'react';
import Character from 'types';

export default function Home() {
  const [dataArr, setDataArr] = useState<Character[]>([]);
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
