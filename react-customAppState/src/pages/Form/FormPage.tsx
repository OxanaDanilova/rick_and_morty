import React, { useContext } from 'react';
import FormCard from '../../components/FormCard/FormCard';
import Form from './Form';
import { AppContext } from 'App';

export default function FormPage() {
  const myContext = useContext(AppContext);
  const { state } = myContext;

  return (
    <div>
      <Form />
      <section className="formCardsWrapper">
        {state.formCards.length > 0
          ? state.formCards.map((formCard, id) => <FormCard key={id} card={formCard} />)
          : ''}
      </section>
    </div>
  );
}
