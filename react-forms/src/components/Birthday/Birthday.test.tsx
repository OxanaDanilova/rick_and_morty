import React from 'react';
import { render, screen } from '@testing-library/react';
import Birthday from './Birthday';

describe('Check Birthday', () => {
  it('check of the rendering Birthday field', () => {
    const testRef = React.createRef<HTMLInputElement>();
    render(
      <Birthday
        reference={testRef}
        isValid={true}
        errorMessage="Birthday must be before the current date."
      />
    );
    expect(screen.getByText('Birthday')).toBeInTheDocument();
  });
  it('check error message', () => {
    const testRef = React.createRef<HTMLInputElement>();
    render(
      <Birthday
        reference={testRef}
        isValid={false}
        errorMessage="Birthday must be before the current date."
      />
    );
    expect(screen.getByText('Birthday must be before the current date.')).toBeInTheDocument();
  });
});
