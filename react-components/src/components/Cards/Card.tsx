import React from 'react';

interface Props {
  image: string;
  id: number;
}

export default function Card({ image, id }: Props) {
  return (
    <li className="card-wrapper">
      <h3>Card {id + 1}</h3>
      <img className="card-pic" src={image} alt="Picture for card" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur aperiam unde animi
        reprehenderit tempora at quasi vel nostrum, suscipit eum saepe nihil laudantium corporis
        nobis omnis expedita, est dolores quo?
      </p>
    </li>
  );
}
