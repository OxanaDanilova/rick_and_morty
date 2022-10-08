import React from 'react';

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
    <li className="card-wrapper" data-testid="card">
      <img className="card-pic" src={card.avatar} alt="User avatar" />
      <h3>{card.firstName}</h3>
      <h3>{card.lastName}</h3>
      <h4>{card.birthday}</h4>
      <h4>{card.country}</h4>
    </li>
  );
}
