import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../../pages/Form/Form';

describe('Check Gender field', () => {
  it('check of the rendering Gender field', () => {
    const createCard = jest.fn();
    render(<Form createCard={createCard} />);
    expect(screen.getByTestId('gender')).toBeInTheDocument();
  });
});
