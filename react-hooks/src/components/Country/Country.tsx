import React from 'react';
import './Country.css';

interface MyProps {
  errorMessage: string;
  isValid: boolean;
  reference: React.RefObject<HTMLSelectElement>;
}

export default function Country({ errorMessage, isValid, reference }: MyProps) {
  return (
    <div className="countryWrapper">
      <label>Country</label>
      <div className="select-wrapper">
        <select ref={reference}>
          <option></option>
          <option>Germany</option>
          <option>Kasachstan</option>
          <option>Russia</option>
          <option>China</option>
          <option>Spain</option>
        </select>
        {!isValid && <p className="er-mes">{errorMessage}</p>}
      </div>
    </div>
  );
}
