import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';

describe('Check FormCard', () => {
  it('check rendering FormCard', () => {
    const testUser = {
      firstName: 'Spanch',
      lastName: 'Bob',
      birthday: '05/05/2000',
      country: 'USA',
      gender: 'Male',
      avatar:
        'https://play-lh.googleusercontent.com/ZqSUbqjoUmb-2MpPNkzvh9O0jBiOffhdocrZRwZ2Jliwy3TJ8DawPvjZx_AonSiw7e5p',
    };
    render(<FormCard card={testUser} />);

    const formCard = screen.getByTestId('formcard');
    const fname = screen.getByText('First Name:');
    const lname = screen.getByText('Last Name:');
    const bday = screen.getByText('Birthday:');
    const country = screen.getByText('Country:');
    const gender = screen.getByText('Gender:');
    expect(formCard).toBeInTheDocument();
    expect(formCard).toHaveClass('card-wrapper');
    expect(fname).toBeInTheDocument();
    expect(screen.getByText(/Spanch/i)).toBeInTheDocument;
    expect(lname).toBeInTheDocument();
    expect(screen.getByText(/Bob/i)).toBeInTheDocument;
    expect(bday).toBeInTheDocument();
    expect(screen.getByText('05/05/2000')).toBeInTheDocument;
    expect(country).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument;
    expect(screen.getByText('USA')).toBeInTheDocument;
    expect(screen.getByAltText('User avatar')).toBeInTheDocument;
  });
});
