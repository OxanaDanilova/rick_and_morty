import React from 'react';
import './Birthday.css';

interface MyProps {
  errorMessage: string;
  isValid: boolean;
  reference: React.RefObject<HTMLInputElement>;
}

export default function Birthday({ errorMessage, isValid, reference }: MyProps) {
  return (
    <div className="birthdayWrapper">
      <label>Birthday</label>
      <div className="bday-wrapper">
        <input type="date" name="dob" id="dob" ref={reference} />
        {!isValid && <p className="er-mes">{errorMessage}</p>}
      </div>
    </div>
  );
}
