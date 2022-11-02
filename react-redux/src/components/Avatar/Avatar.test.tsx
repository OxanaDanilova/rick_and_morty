import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../../pages/Form/Form';
import userEvent from '@testing-library/user-event';

describe('Check avatar', () => {
  it('check of the rendering Avatar field', () => {
    render(<Form />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
  /* it('check error message', async () => {
    render(<Form />);
    const formPageLink = screen.getByTestId('formPageLink');
    userEvent.click(formPageLink);
    const firstNameInput = screen.getAllByTestId('formusername')[0];
    userEvent.type(firstNameInput, 'testtest');
    expect(screen.getByText('testtest')).toBeInTheDocument();
    const submitBtn = screen.getByText('Create Card');
    userEvent.click(submitBtn);

    expect(await screen.findByTestId('avatarErMes')).toBeInTheDocument();
  }); */
});