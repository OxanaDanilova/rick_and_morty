import React from 'react';
import Character from 'types';

interface MyProps {
  character: Character;
  id: number;
  changeModal: (character: Character, isVisible: boolean) => void;
}

export default function Card({ character, changeModal }: MyProps) {
  return (
    <li className="card-wrapper" data-testid="card" onClick={() => changeModal(character, true)}>
      <img className="card-pic" src={character.image} alt="Picture for card" />
      <h4>Name: {character.name}</h4>
    </li>
  );
}
