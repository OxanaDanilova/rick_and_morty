import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../../pages/Form/Form';
import userEvent from '@testing-library/user-event';

describe('Check Agreemnet', () => {
  it('check of the rendering Agreement checkbox', () => {
    render(<Form />);
    expect(screen.getByText('I consent to my personal data')).toBeInTheDocument();
    expect(screen.getByTestId('agreement')).toBeInTheDocument();
  });
  it('check error message', async () => {
    render(<Form />);
    const firstNameInput = screen.getAllByTestId('formusername')[0];
    userEvent.type(firstNameInput, 't');
    const submitBtn = screen.getByText('Create Card');
    userEvent.click(submitBtn);
    expect(await screen.findByTestId('agreementErMes')).toBeInTheDocument();
  });
});
