import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Check Card', () => {
  it('check rendering Card', () => {
    const changeModal = () => true;
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
    render(<Card character={character} id={1} key={1} changeModal={changeModal} />);

    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('card-wrapper');
    expect(screen.getAllByAltText('Picture for card')).toHaveLength(1);
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
  });
});
