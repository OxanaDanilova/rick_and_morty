import React from 'react';
import Card from './Card/Card';
import './Cards.css';
import { Character, MyStateSearch, MyStateForm } from 'types';
//import { AppContext } from '../../App';

import { useSelector } from 'react-redux';

export default function Cards() {
  //const myContext = useContext(AppContext);
  //const { state } = myContext;

  const dataArr = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.cards.dataArr
  );
  const isLoading = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.cards.isLoading
  );
  const hasError = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.cards.hasError
  );
  console.log(dataArr);
  return (
    <div>
      {isLoading ? (
        <div id="load" data-testid="loading">
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      ) : (
        <>
          {hasError ? (
            <h3 className="api-error-mes">There are no matching cards for this request.</h3>
          ) : (
            <>
              <h3>Cards</h3>
              <ul className="cards" data-testid="cards">
                {dataArr.map((character: Character, id: number) => (
                  <Card character={character} id={id} key={id} />
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
}
