/* import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  it('check rendering of the Search Bar', () => {
    const changeArr = () => jest.fn();
    const changeLoading = () => jest.fn();
    render(<SearchBar changeArr={changeArr} changeLoading={changeLoading} />);
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
    const changeArr = () => jest.fn();
    const changeLoading = () => jest.fn();
    const { unmount } = render(<SearchBar changeArr={changeArr} changeLoading={changeLoading} />);
    const input = screen.getByPlaceholderText(/Search/i);
    userEvent.type(input, 'mytest');
    expect(window.localStorage.setItem).not.toBeCalled();
    unmount();
    expect(window.localStorage.setItem).toBeCalledTimes(1);
    expect(window.localStorage.setItem).toBeCalledWith('searchItem', 'mytest');
  });
});

describe('Check API requests', () => {
  const apiData = [
    {
      gender: 'Male',
      id: 1,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      name: 'Rick Sanchez',
      origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
      species: 'Human',
      status: 'Alive',
    },
    {
      gender: 'Female',
      id: 3,
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      name: 'Summer Smith',
      origin: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      species: 'Human',
      status: 'Alive',
    },
  ];
  const testCharacter = [
    {
      gender: 'unknown',
      id: 436,
      image: 'https://rickandmortyapi.com/api/character/avatar/436.jpeg',
      location: {
        name: 'Testicle Monster Dimension',
        url: 'https://rickandmortyapi.com/api/location/21',
      },
      name: 'Giant Testicle Monster',
      origin: {
        name: 'Testicle Monster Dimension',
        url: 'https://rickandmortyapi.com/api/location/21',
      },
      species: 'Alien',
      status: 'Alive',
    },
  ];
  const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
      const name = req.url.searchParams.get('name');
      if (name) {
        return res(ctx.status(200), ctx.json({ results: testCharacter }));
      } else {
        return res(ctx.status(200), ctx.json({ results: apiData }));
      }
    })
  );
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());
  it('check loader during waiting for API response', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
  it('check successful API response without search params', async () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const cardsSection = await screen.findByTestId('cards');
    expect(cardsSection).toBeInTheDocument();
    expect(await screen.findAllByAltText('Picture for card')).toHaveLength(2);
    expect(await screen.findAllByTestId('card')).toHaveLength(2);
  });
  it('check successful API response with search params', async () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const input = screen.getByPlaceholderText(/Search/i);
    userEvent.type(input, 'test{enter}');
    const cardsSection = await screen.findByTestId('cards');
    expect(cardsSection).toBeInTheDocument();
    expect(await screen.findAllByAltText('Picture for card')).toHaveLength(1);
    expect(await screen.findAllByTestId('card')).toHaveLength(1);
    expect(await screen.findByText('Name: Giant Testicle Monster')).toBeInTheDocument();
  });
  it('check unsuccessful API response', async () => {
    server.use(
      rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(
          ctx.status(404),
          ctx.json({
            errorMessage: 'There is no here',
          })
        );
      })
    );
    render(
      <Router>
        <App />
      </Router>
    );
    const input = screen.getByPlaceholderText(/Search/i);
    userEvent.type(input, 'test{enter}');
    const message = await screen.findByText('There are no matching cards for this request.');
    expect(message).toBeInTheDocument();
  });
});
 */
