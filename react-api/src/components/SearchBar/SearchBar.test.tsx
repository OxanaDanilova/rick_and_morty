import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  it('check rendering of the Search Bar', () => {
    const changeArr = () => true;
    render(<SearchBar changeArr={changeArr} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });

  it('check value in SearchBar after opening About page', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const input = screen.getByPlaceholderText(/Search/i);
    const aboutPageLink = screen.getByTestId('aboutPageLink');
    const homePageLink = screen.getByTestId('homePageLink');
    userEvent.type(input, 'RSSchool');
    userEvent.click(aboutPageLink);
    expect(input).not.toBeInTheDocument();
    userEvent.click(homePageLink);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/i)).toHaveDisplayValue('RSSchool');
    userEvent.clear(input);
  });
});

describe('LocalStorage for SearchBar', () => {
  it('check LocalStorage after typing in SearchBar', async () => {
    const localStorageMock = {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
    const changeArr = () => true;
    const { unmount } = render(<SearchBar changeArr={changeArr} />);
    const input = screen.getByPlaceholderText(/Search/i);
    userEvent.type(input, 'mytest');
    expect(window.localStorage.setItem).not.toBeCalled();
    unmount();
    expect(window.localStorage.setItem).toBeCalledTimes(1);
    expect(window.localStorage.setItem).toBeCalledWith('searchItem', 'mytest');
  });
});
