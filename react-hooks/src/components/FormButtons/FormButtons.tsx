import React from 'react';
import './FormButtons.css';

interface MyProps {
  disabled: boolean;
}

export default function FormButtons({ disabled }: MyProps) {
  return (
    <div className="panelButtons">
      <input type="submit" value="Create Card" disabled={disabled} />
      <input type="reset" value="Reset" />
    </div>
  );
}
