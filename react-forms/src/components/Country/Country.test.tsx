import React from 'react';
import { render, screen } from '@testing-library/react';
import Country from './Country';

describe('Check Country', () => {
  it('check of the rendering Country field', () => {
    const testRef = React.createRef<HTMLSelectElement>();
    render(<Country reference={testRef} errorMessage="This field is required." isValid={true} />);
    expect(screen.getByText('Country')).toBeInTheDocument();
  });
  it('check error message', () => {
    const testRef = React.createRef<HTMLSelectElement>();
    render(<Country reference={testRef} errorMessage="This field is required." isValid={false} />);
    expect(screen.getByText('This field is required.')).toBeInTheDocument();
  });
});
