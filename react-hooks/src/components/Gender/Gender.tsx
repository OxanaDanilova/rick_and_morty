import React from 'react';
import './Gender.css';

interface MyProps {
  reference: React.RefObject<HTMLInputElement>;
}

export default function Gender({ reference }: MyProps) {
  return (
    <div className="genderWrapper">
      <label className="switch">
        <input data-testid="gender" type="checkbox" name="gender" id="gender" ref={reference} />
        <span className="slider round"></span>
        <label id="male">Male</label>
        <label id="female">Female</label>
      </label>
    </div>
  );
}
