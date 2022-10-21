import React from 'react';
import './UserName.css';

interface MyProps {
  label: string;
  errorMessage: string;
  isValid: boolean;
  reference: React.RefObject<HTMLInputElement>;
}

export default function UserName({ label, errorMessage, isValid, reference }: MyProps) {
  return (
    <div className="nameWrapper">
      <label>{label}</label>
      <div className="input-wrapper">
        <input data-testid="formusername" ref={reference} type="text" id="fname" />
        {!isValid && <p className="er-mes">{errorMessage}</p>}
      </div>
    </div>
  );
}
