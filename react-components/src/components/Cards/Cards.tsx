import React from 'react';
import Card from './Card/Card';
import './Cards.css';

type Props = {
  imgArr: string[];
};

export default function Cards({ imgArr }: Props) {
  return (
    <div>
      <h3>Cards</h3>
      <ul className="cards" data-testid="cards">
        {imgArr.map((image: string, id: number) => (
          <Card image={image} id={id} key={id} />
        ))}
      </ul>
    </div>
  );
}
