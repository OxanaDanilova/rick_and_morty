import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../../App';
import userEvent from '@testing-library/user-event';

describe('Check User Name', () => {
  it('check of the rendering Agreement checkbox', () => {
    render(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    );
    const formLink = screen.getByTestId('formPageLink');
    userEvent.click(formLink);
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('First Name')).toBeInTheDocument();
  });
});