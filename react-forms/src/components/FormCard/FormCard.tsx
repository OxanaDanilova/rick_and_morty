import React from 'react';
import './FormCard.css';

interface MyProps {
  card: {
    firstName: string;
    lastName: string;
    birthday: string;
    country: string;
    avatar: string;
  };
}

export default function FormCard({ card }: MyProps) {
  return (
    <li className="card-wrapper" data-testid="formcard">
      <img className="card-pic" src={card.avatar} alt="User avatar" />
      <p>
        First Name: <span>{card.firstName}</span>
      </p>
      <p>
        Last Name: <span>{card.lastName}</span>
      </p>
      <p>
        Birthday: <span>{card.birthday}</span>
      </p>
      <p>
        Country: <span>{card.country}</span>
      </p>
    </li>
  );
}
