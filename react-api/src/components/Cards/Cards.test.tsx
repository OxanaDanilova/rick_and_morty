import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';

describe('Check Cards', () => {
  it('check rendering Cards', () => {
    const apiData = [
      {
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
      },
      {
        gender: 'Female',
        id: 3,
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        name: 'Summer Smith',
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        species: 'Human',
        status: 'Alive',
      },
    ];
    render(<Cards dataArr={apiData} hasError={false} isLoading={false} />);

    const cardsSection = screen.getByTestId('cards');
    expect(cardsSection).toBeInTheDocument();
    expect(cardsSection).toHaveClass('cards');
    expect(screen.getAllByAltText('Picture for card')).toHaveLength(2);
    expect(screen.getAllByTestId('card')).toHaveLength(2);
  });
});
