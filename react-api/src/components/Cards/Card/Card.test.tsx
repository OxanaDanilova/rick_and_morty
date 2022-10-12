/* import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Check Card', () => {
  it('check rendering Card', () => {
    render(
      <Card
        image={
          'https://images.unsplash.com/photo-1664629918792-88c2cc34fa58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        }
        id={1}
        key={1}
      />
    );

    const card = screen.getByTestId('card');
    const author = screen.getByText('Added by:');
    const like = screen.getByTestId('like');
    const view = screen.getByTestId('view');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('card-wrapper');
    expect(screen.getAllByAltText('Picture for card')).toHaveLength(1);
    expect(author).toBeInTheDocument();
    expect(author).toHaveClass('author');
    expect(like).toBeInTheDocument();
    expect(like).toHaveClass('like');
    expect(view).toBeInTheDocument();
    expect(view).toHaveClass('view');
  });
});
 */
