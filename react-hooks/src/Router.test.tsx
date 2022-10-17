import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Check Router', () => {
  it('open About page by clicking on the link About', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const homePageLink = screen.getByTestId('homePageLink');
    const aboutPageLink = screen.getByTestId('aboutPageLink');
    userEvent.click(aboutPageLink);
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(homePageLink).toBeInTheDocument();
    expect(aboutPageLink).toBeInTheDocument();
    expect(homePageLink).not.toHaveClass('active');
    expect(aboutPageLink).toHaveClass('active');
  });
  it('open Home page by clicking on the link Home', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const homePageLink = screen.getByTestId('homePageLink');
    const aboutPageLink = screen.getByTestId('aboutPageLink');
    userEvent.click(aboutPageLink);
    userEvent.click(homePageLink);
    expect(homePageLink).toHaveClass('active');
    expect(homePageLink).toBeInTheDocument();
    expect(aboutPageLink).toBeInTheDocument();
    expect(screen.getByText('Home page')).toBeInTheDocument();
    expect(screen.queryByText('About us')).not.toBeInTheDocument();
  });
  it('check routing to the About page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('About us')).toBeInTheDocument();
  });

  it('check routing to the Home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Home page')).toBeInTheDocument();
  });
  it('check notFoundPage', () => {
    render(
      <MemoryRouter initialEntries={['/dfgdfgdfg']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
