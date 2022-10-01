import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Check Header', () => {
  it('check rendering Header', () => {
    render(<Header pageName="Super page" />);
    expect(screen.getByText('Super page')).toBeInTheDocument();
  });
});
