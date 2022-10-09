import React from 'react';
import { render, screen } from '@testing-library/react';
import Agreement from './Agreement';
import FormPage from 'pages/Form/FormPage';
import userEvent from '@testing-library/user-event';

describe('Check Agreemnet', () => {
  it('check of the rendering Agreement checkbox', () => {
    const testRef = React.createRef<HTMLInputElement>();
    render(<Agreement reference={testRef} isValid={true} errorMessage="This field is required." />);
    expect(screen.getByText('I consent to my personal data')).toBeInTheDocument();
    expect(screen.getByTestId('agreement')).toBeInTheDocument();
  });
  it('check error message', () => {
    render(<FormPage />);
    const agreement = screen.getByTestId('agreement');
    const submitBtn = screen.getByText('Create Card');
    userEvent.click(agreement);
    userEvent.click(agreement);
    userEvent.click(submitBtn);
    expect(screen.getByText('This field is required.')).toBeInTheDocument();
  });
});
