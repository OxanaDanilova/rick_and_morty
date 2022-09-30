import React from 'react';
import { /* fireEvent, */ render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import SearchBar from './SearchBar';
//import { notDeepEqual } from 'assert';
//import SearchBar from './SearchBar';

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

describe('Search Bar', () => {
  it('check rendering of the Search Bar', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });

  it('check LocalStorage after typing in SearchBar', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/Search/i);
    expect(input).toBeEmptyDOMElement();
    userEvent.type(input, 'mytest');
    expect(window.localStorage.setItem).not.toBeCalled();
  });

  it('check LocalStorage after typing in SearchBar and opening another page', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const input = screen.getByPlaceholderText(/Search/i);
    const linkAbout = screen.getByText('About');
    expect(input).toBeEmptyDOMElement();
    userEvent.type(input, 'RSSchool');
    userEvent.click(linkAbout);
    expect(window.localStorage.setItem).toBeCalledTimes(1);
    expect(screen.queryByDisplayValue(/RSSchool/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByText('Home'));
    expect(screen.queryByDisplayValue(/RSSchool/i)).not.toBeInTheDocument();
    expect(window.localStorage.getItem).toBeCalled();
  });
});
