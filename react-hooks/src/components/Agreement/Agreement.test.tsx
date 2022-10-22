/* import React from 'react';
import { render, screen } from '@testing-library/react';
import Agreement from './Agreement';

describe('Check Agreemnet', () => {
  it('check of the rendering Agreement checkbox', () => {
    const testRef = React.createRef<HTMLInputElement>();
    render(<Agreement reference={testRef} isValid={true} errorMessage="This field is required." />);
    expect(screen.getByText('I consent to my personal data')).toBeInTheDocument();
    expect(screen.getByTestId('agreement')).toBeInTheDocument();
  });
  it('check error message', () => {
    const testRef = React.createRef<HTMLInputElement>();
    render(
      <Agreement reference={testRef} isValid={false} errorMessage="This field is required." />
    );
    expect(screen.getByText('This field is required.')).toBeInTheDocument();
  });
});
 */
