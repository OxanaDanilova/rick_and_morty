/* import React from 'react';
import { render, screen } from '@testing-library/react';
import UserName from './UserName';

describe('Check User Name', () => {
  it('check of the rendering Agreement checkbox', () => {
    const testRef = React.createRef<HTMLInputElement>();
    render(
      <UserName
        reference={testRef}
        label="First Name"
        isValid={true}
        errorMessage="First Name schould contain more than 1 letter."
      />
    );
    expect(screen.getByText('First Name')).toBeInTheDocument();
  });
  it('check error message', () => {
    const testRef = React.createRef<HTMLInputElement>();
    render(
      <UserName
        reference={testRef}
        label="First Name"
        isValid={false}
        errorMessage="First Name schould contain more than 1 letter."
      />
    );
    expect(screen.getByText('First Name schould contain more than 1 letter.')).toBeInTheDocument();
  });
});
 */
