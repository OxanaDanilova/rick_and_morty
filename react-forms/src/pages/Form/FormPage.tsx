import React, { Component } from 'react';
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

type MyState = {
  cards: Card[];
};
export default class FormPage extends Component<unknown, MyState> {
  state: MyState = {
    cards: [],
  };
  createCard = (card: Card) => {
    const formCards = this.state.cards;
    formCards.push(card);
    this.setState({ cards: formCards });
  };
  render() {
    return (
      <div>
        <Form createCard={this.createCard} />
        <section className="formCardsWrapper">
          {this.state.cards.length > 0
            ? this.state.cards.map((formCard, id) => <FormCard key={id} card={formCard} />)
            : ''}
        </section>
      </div>
    );
  }
}
