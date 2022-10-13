import React, { Component } from 'react';
import Card from './Card/Card';
import './Cards.css';
import Character from 'types';
import Modal from './Card/Modal/Modal';

type Props = {
  dataArr: Character[];
};

type MyState = {
  showModal: boolean;
  modalCharacter: Character | null;
};

export default class Cards extends Component<Props, MyState> {
  state = {
    showModal: false,
    modalCharacter: null,
  };
  changeModal = (character: Character | null, isVisible: boolean) => {
    this.setState({ showModal: isVisible, modalCharacter: character });
  };
  render() {
    return (
      <div>
        <h3>Cards</h3>
        <ul className="cards" data-testid="cards">
          {this.props.dataArr.map((character: Character, id: number) => (
            <Card character={character} id={id} key={id} changeModal={this.changeModal} />
          ))}
        </ul>
        <Modal
          character={this.state.modalCharacter}
          isVisible={this.state.showModal}
          changeModal={this.changeModal}
        />
      </div>
    );
  }
}
