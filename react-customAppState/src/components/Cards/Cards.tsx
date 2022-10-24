import React, { useState } from 'react';
import Card from './Card/Card';
import './Cards.css';
import Character from 'types';
import Modal from './Card/Modal/Modal';

type Props = {
  dataArr: Character[];
  hasError: boolean;
  isLoading: boolean;
};

export default function Cards({ dataArr, hasError, isLoading }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalCharacter, setModalCharacter] = useState<Character | null>(null);

  const changeModal = (character: Character | null, isVisible: boolean) => {
    setShowModal(isVisible);
    setModalCharacter(character);
  };
  return (
    <div>
      {isLoading ? (
        <div id="load" data-testid="loading">
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      ) : (
        <>
          {hasError ? (
            <h3 className="api-error-mes">There are no matching cards for this request.</h3>
          ) : (
            <>
              <h3>Cards</h3>
              <ul className="cards" data-testid="cards">
                {dataArr.map((character: Character, id: number) => (
                  <Card character={character} id={id} key={id} changeModal={changeModal} />
                ))}
              </ul>
              <Modal character={modalCharacter} isVisible={showModal} changeModal={changeModal} />
            </>
          )}
        </>
      )}
    </div>
  );
}
