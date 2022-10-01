import React from 'react';
import { BiLike } from 'react-icons/bi';
import { BsEyeFill } from 'react-icons/bs';
import CardType from 'types';

export default function Card({ image, id }: CardType) {
  return (
    <li className="card-wrapper">
      <img className="card-pic" src={image} alt="Picture for card" />
      <h4>Card {id + 1}</h4>
      <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias rerum facilis, veniam
        mollitia quaerat vel iste quae eveniet voluptate sint.
      </p>
      <p className="author">
        Added by: <span> Author{id}</span>
      </p>
      <div className="card-footer">
        <div className="like">
          <BiLike />
          115
        </div>
        <div className="view">
          <BsEyeFill />
          505
        </div>
      </div>
    </li>
  );
}
