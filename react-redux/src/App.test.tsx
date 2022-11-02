import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App', () => {
  it('check rendering the Home page', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const homePageLink = screen.getByTestId('homePageLink');
    const aboutPageLink = screen.getByTestId('aboutPageLink');
    expect(homePageLink).toHaveClass('active');
    expect(homePageLink).toBeInTheDocument();
    expect(aboutPageLink).toBeInTheDocument();
    expect(screen.getByText('Home page')).toBeInTheDocument();
    expect(screen.queryByText('About us')).not.toBeInTheDocument();
  });
});
