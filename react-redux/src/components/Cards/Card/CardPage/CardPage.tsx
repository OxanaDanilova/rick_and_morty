import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Character, MyStateSearch, MyStateForm } from 'types';
import './CardPage.css';
import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import { useSelector } from 'react-redux';

export default function CardPage() {
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);
  const { id } = useParams();

  const dataArr = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.cards.dataArr
  );
  useEffect(() => {
    if (id) {
      const characterContent = dataArr.find((character: Character) => character.id == +id);

      characterContent ? setCharacter(characterContent) : navigate('/');
      return;
    }
  }, [dataArr, id, navigate]);

  return (
    <>
      <Header pageName="Cards" />
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
    </>
  );
}
