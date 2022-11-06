import React from 'react';
import FormCard from '../../components/FormCard/FormCard';
import Form from './Form';
import { MyStateSearch, MyStateForm } from 'types';
import { useSelector } from 'react-redux';

export default function FormPage() {
  const formCards = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.form.formCards
  );

  return (
    <div>
      <Form />
      <section className="formCardsWrapper">
        {formCards.length > 0
          ? formCards.map((formCard, id) => <FormCard key={id} card={formCard} />)
          : ''}
      </section>
    </div>
  );
}
