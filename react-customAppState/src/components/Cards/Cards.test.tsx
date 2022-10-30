import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import Character from 'types';
import Home from '../../pages/Home/Home';

describe('Check Cards', () => {
  it('check rendering Cards', () => {
    render(<Home />);

    const cardsSection = screen.getByTestId('cards');
    expect(cardsSection).toBeInTheDocument();
    expect(cardsSection).toHaveClass('cards');
  });
  //   it('check the message for no results', () => {
  //     const apiData: Character[] = [];
  //     render(<Cards /*  dataArr={apiData} hasError={true} isLoading={false} */ />);
  //     expect(screen.getByText('There are no matching cards for this request.')).toBeInTheDocument();
  //   });
  //   it('check loader', () => {
  //     const apiData: Character[] = [];
  //     render(<Cards /* dataArr={apiData} hasError={false} isLoading={true} */ />);
  //     expect(screen.getByTestId('loading')).toBeInTheDocument();
  //   });
});
