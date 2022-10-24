import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../../pages/Form/Form';
import userEvent from '@testing-library/user-event';

describe('Check avatar', () => {
  it('check of the rendering Avatar field', () => {
    const createCard = jest.fn();
    render(<Form createCard={createCard} />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
  it('check error message', async () => {
    const createCard = jest.fn();
    render(<Form createCard={createCard} />);
    const firstNameInput = screen.getAllByTestId('formusername')[0];
    userEvent.type(firstNameInput, 't');
    const submitBtn = screen.getByText('Create Card');
    userEvent.click(submitBtn);
    expect(await screen.findByTestId('avatarErMes')).toBeInTheDocument();
  });
});
