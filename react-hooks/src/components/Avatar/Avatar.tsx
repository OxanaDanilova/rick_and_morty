import React from 'react';
import './Avatar.css';

interface MyProps {
  errorMessage: string;
  isValid: boolean;
  reference: React.RefObject<HTMLInputElement>;
}

export default function Avatar({ errorMessage, isValid, reference }: MyProps) {
  return (
    <div className="avatar-wrapper">
      <input data-testid="avatar" type="file" name="avatar" id="avatar" ref={reference} />
      {!isValid && <p className="er-mes">{errorMessage}</p>}
    </div>
  );
}
