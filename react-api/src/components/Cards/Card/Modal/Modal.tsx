import React from 'react';
import Character from 'types';
import './Modal.css';

interface MyProps {
  character: Character | null;
  isVisible: boolean;
  changeModal: (character: Character | null, isVisible: boolean) => void;
}

export default function Modal({ character, isVisible, changeModal }: MyProps) {
  if (!isVisible) return null;
  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.modal')) {
      changeModal(null, false);
    }
  };
  return (
    <section
      className="modal-wrapper"
      onClick={(event: React.MouseEvent<HTMLElement>) => closeModal(event)}
    >
      {isVisible && character ? (
        <li className="card-wrapper modal" data-testid="card">
          <img className="card-pic" src={character.image} alt="Picture for card" />
          <p>Name: {character.name}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Status:{character.status}</p>
          <p>Origin:{character.origin.name}</p>
          <p>Location:{character.location.name}</p>

          <button className="close" onClick={() => changeModal(null, false)}>
            &times;
          </button>
        </li>
      ) : (
        ''
      )}
    </section>
  );
}
