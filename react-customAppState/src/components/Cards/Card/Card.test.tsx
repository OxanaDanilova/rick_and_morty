import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Check Card', () => {
  it('check rendering Card', () => {
    const character = {
      gender: 'Male',
      id: 1,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      name: 'Rick Sanchez',
      origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
      species: 'Human',
      status: 'Alive',
    };
    render(
      <Router>
        <Card character={character} id={1} key={1} />
      </Router>
    );

    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('card-wrapper');
    expect(screen.getAllByAltText('Picture for card')).toHaveLength(1);
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
  });
});
