import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../../pages/Form/Form';
import userEvent from '@testing-library/user-event';

describe('Check Country', () => {
  it('check of the rendering Country field', () => {
    const createCard = jest.fn();
    render(<Form createCard={createCard} />);
    expect(screen.getByText('Country')).toBeInTheDocument();
  });
  it('check error message', async () => {
    const createCard = jest.fn();
    render(<Form createCard={createCard} />);
    const firstNameInput = screen.getAllByTestId('formusername')[0];
    userEvent.type(firstNameInput, 't');
    const submitBtn = screen.getByText('Create Card');
    userEvent.click(submitBtn);
    expect(await screen.findByTestId('countryErMes')).toBeInTheDocument();
  });
});
