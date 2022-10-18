import React, { useState } from 'react';
import FormCard from '../../components/FormCard/FormCard';
import Form from './Form';

interface Card {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  avatar: string;
  gender: string;
}

export default function FormPage() {
  const [cards, setCards] = useState<Card[]>([]);
  const createCard = (card: Card) => {
    setCards([...cards, card]);
  };
  return (
    <div>
      <Form createCard={createCard} />
      <section className="formCardsWrapper">
        {cards.length > 0 ? cards.map((formCard, id) => <FormCard key={id} card={formCard} />) : ''}
      </section>
    </div>
  );
}
