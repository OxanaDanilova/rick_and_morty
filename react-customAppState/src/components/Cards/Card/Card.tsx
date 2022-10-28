import React from 'react';
import { useNavigate } from 'react-router';
import Character from 'types';

interface MyProps {
  character: Character;
  id: number;
}

export default function Card({ character }: MyProps) {
  const navigate = useNavigate();
  return (
    <li className="card-wrapper" data-testid="card" onClick={() => navigate(`/${character.id}`)}>
      <img className="card-pic" src={character.image} alt="Picture for card" />
      <h4>Name: {character.name}</h4>
    </li>
  );
}
