import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';

describe('Check Cards', () => {
  it('check rendering Cards', () => {
    render(
      <Cards
        imgArr={[
          'https://images.unsplash.com/photo-1664629918792-88c2cc34fa58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          'https://images.unsplash.com/photo-1664629918792-88c2cc34fa58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        ]}
      />
    );

    const cardsSection = screen.getByTestId('cards');
    expect(cardsSection).toBeInTheDocument();
    expect(cardsSection).toHaveClass('cards');
    expect(screen.getAllByAltText('Picture for card')).toHaveLength(2);
    expect(screen.getAllByTestId('card')).toHaveLength(2);
  });
});
