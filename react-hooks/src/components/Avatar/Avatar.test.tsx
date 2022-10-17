import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Check avatar', () => {
  it('check of the rendering Avatar field', () => {
    const testRef = React.createRef<HTMLInputElement>();
    render(<Avatar reference={testRef} isValid={true} errorMessage="Add your avatar please." />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
  it('check error message', () => {
    const testRef = React.createRef<HTMLInputElement>();
    render(<Avatar reference={testRef} isValid={false} errorMessage="Add your avatar please." />);
    expect(screen.getByText('Add your avatar please.')).toBeInTheDocument();
  });
});
