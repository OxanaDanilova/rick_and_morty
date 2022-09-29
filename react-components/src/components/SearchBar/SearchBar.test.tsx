import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  it('check rendering of the Search Bar', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });

  it('check value in Search Bar after opening About us page and then Home page', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeEmptyDOMElement();
    userEvent.type(screen.getByRole('textbox'), 'RSSchool');
    userEvent.click(screen.getByText('About'));
    expect(screen.queryByDisplayValue(/RSSchool/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByText('Home'));
    expect(screen.queryByDisplayValue(/RSSchool/i)).toBeInTheDocument();
  });
});

/*   it('check value in Search Bar after refreshing the Home page', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeEmptyDOMElement();
    userEvent.type(screen.getByRole('textbox'), 'RSSchool');
    fireEvent.
    screen.debug();
    expect(screen.queryByDisplayValue(/RSSchool/i)).not.toBeInTheDocument();
  });
}); */
