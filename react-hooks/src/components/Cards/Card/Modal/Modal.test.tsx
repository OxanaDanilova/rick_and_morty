import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from '../../Cards';
import Modal from './Modal';
import userEvent from '@testing-library/user-event';

describe('Check Modal', () => {
  it('check rendering Modal by clicking on the Card', () => {
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
    ];
    render(<Cards dataArr={apiData} hasError={false} isLoading={false} />);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    userEvent.click(card);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
  it('check data on the Modal', () => {
    const character = {
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
    };
    const changeModal = () => true;
    render(<Modal character={character} isVisible={true} changeModal={changeModal} />);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
    expect(screen.getAllByAltText('Picture for card')).toHaveLength(1);
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
    expect(screen.getByText(/Species:/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender:/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/Status:/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    expect(screen.getByText(/Origin:/i)).toBeInTheDocument();
    expect(screen.getByText(/Earth \(C-137\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Location:/i)).toBeInTheDocument();
    expect(screen.getByText(/Citadel of Ricks/i)).toBeInTheDocument();
  });
  it('close Modal by clicking on the close button', () => {
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
    ];
    render(<Cards dataArr={apiData} hasError={false} isLoading={false} />);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    userEvent.click(card);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    const closeBtn = screen.getByTestId('close');
    expect(closeBtn).toBeInTheDocument();
    userEvent.click(closeBtn);
    const modal = screen.queryByTestId('modal');
    expect(modal).not.toBeInTheDocument();
  });
  it('close Modal by clicking outside', () => {
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
    ];
    render(<Cards dataArr={apiData} hasError={false} isLoading={false} />);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    userEvent.click(card);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    const wrapper = screen.getByTestId('modal-wrapper');
    userEvent.click(wrapper);
    const modal = screen.queryByTestId('modal');
    expect(modal).not.toBeInTheDocument();
  });
});
