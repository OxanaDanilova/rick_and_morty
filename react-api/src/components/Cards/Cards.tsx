import React from 'react';
import Card from './Card/Card';
import './Cards.css';
import Character from 'types';

type Props = {
  dataArr: Character[];
};

export default function Cards({ dataArr }: Props) {
  return (
    <div>
      <h3>Cards</h3>
      <ul className="cards" data-testid="cards">
        {dataArr.map((character: Character, id: number) => (
          <Card character={character} id={id} key={id} />
        ))}
      </ul>
    </div>
  );
}
