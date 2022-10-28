import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import Character from 'types';
import './CardPage.css';
import { AppContext } from 'App';
import { Link } from 'react-router-dom';

export default function CardPage() {
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);
  const { id } = useParams();

  const myContext = useContext(AppContext);
  const { state } = myContext;
  console.log('dataArr', state.dataArr);
  useEffect(() => {
    if (id) {
      const characterContent = state.dataArr.find((character: Character) => character.id == +id);
      console.log(characterContent);
      characterContent ? setCharacter(characterContent) : navigate('/');
      return;
    }
  }, [state.dataArr, id, navigate]);

  return (
    <section className="card-page-section">
      <Link to="/" className="backBtn">
        Back
      </Link>
      {character && (
        <li className="card-page-wrapper">
          <img src={character.image} alt="Picture for card" />
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
