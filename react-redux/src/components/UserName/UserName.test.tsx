import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../../pages/Form/Form';
import userEvent from '@testing-library/user-event';

describe('Check User Name', () => {
  it('check of the rendering Agreement checkbox', () => {
    render(<Form />);
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
  });
  /*  it('check error message', async () => {
    render(<Form />);
    const firstNameInput = screen.getAllByTestId('formusername')[0];
    userEvent.type(firstNameInput, 't');
    userEvent.clear(firstNameInput);
    const submitBtn = screen.getByText('Create Card');
    userEvent.click(submitBtn);
    expect(await screen.findAllByTestId('userNameErMes')).toHaveLength(2);
    userEvent.type(firstNameInput, 't');
    expect(
      await screen.findByText('First Name schould contain more than 1 letter.')
    ).toBeInTheDocument();
  }); */
});
