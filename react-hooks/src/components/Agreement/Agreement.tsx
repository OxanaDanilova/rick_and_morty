import React from 'react';
import './Agreement.css';

interface MyProps {
  errorMessage: string;
  isValid: boolean;
  reference: React.RefObject<HTMLInputElement>;
}

export default function Agreement({ errorMessage, isValid, reference }: MyProps) {
  return (
    <div className="agreemWrapper">
      <label htmlFor="user-agreement">I consent to my personal data</label>
      <input
        data-testid="agreement"
        type="checkbox"
        name="user-agreement"
        id="user-agreement"
        ref={reference}
      />
      {!isValid && <p className="er-mes">{errorMessage}</p>}
    </div>
  );
}
