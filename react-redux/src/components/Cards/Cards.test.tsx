import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../../App';

describe('Check Cards', () => {
  it('check rendering Cards', async () => {
    render(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    );
    const cardsSection = await screen.findByTestId('cards');
    expect(cardsSection).toBeInTheDocument();
    expect(cardsSection).toHaveClass('cards');
  });
});
