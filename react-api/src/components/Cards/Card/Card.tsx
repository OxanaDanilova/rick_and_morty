import React from 'react';
/* import { BiLike } from 'react-icons/bi';
import { BsEyeFill } from 'react-icons/bs'; */
import Character from 'types';
import Modal from './Modal/Modal';

interface MyProps {
  character: Character;
  id: number;
  changeModal: (character: Character, isVisible: boolean) => void;
}

export default function Card({ character, id, changeModal }: MyProps) {
  return (
    <li className="card-wrapper" data-testid="card" onClick={() => changeModal(character, true)}>
      <img className="card-pic" src={character.image} alt="Picture for card" />
      <h4>Name: {character.name}</h4>
      {/* <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias rerum facilis, veniam
        mollitia quaerat vel iste quae eveniet voluptate sint.
      </p>
      <p className="author">
        Added by: <span> Author{id}</span>
      </p>
      <div className="card-footer">
        <div className="like" data-testid="like">
          <BiLike />
          115
        </div>
        <div className="view" data-testid="view">
          <BsEyeFill />
          505
        </div>
      </div> */}
    </li>
  );
}
