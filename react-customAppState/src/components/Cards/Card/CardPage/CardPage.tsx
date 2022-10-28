import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Character from 'types';
import './CardPage.css';
import { AppContext } from 'App';

export default function CardPage() {
  const [character, setCharacter] = useState<Character | null>(null);
  const { id } = useParams();

  const myContext = useContext(AppContext);
  const { dataArr, setDataArr } = myContext;
  console.log('dataArr', dataArr);
  useEffect(() => {
    if (id) {
      const characterContent = dataArr.find((character: Character) => character.id == +id);
      console.log(characterContent);
      characterContent && setCharacter(characterContent);
    }
  }, [dataArr, id]);

  /*   if (!isVisible) return null;
  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.modal')) {
      changeModal(null, false);
    } 
  };*/
  return (
    <section>
      {character && (
        <li className="card-wrapper modal" data-testid="modal">
          <img className="card-pic" src={character.image} alt="Picture for card" />
          <p>Name: {character.name}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Status:{character.status}</p>
          <p>Origin:{character.origin.name}</p>
          <p>Location:{character.location.name}</p>
        </li>
      )}
    </section>
  );
}
