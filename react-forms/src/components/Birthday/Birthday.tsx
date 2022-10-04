import React, { Component } from 'react';
import './Birthday.css';

interface MyProps {
  errorMessage: string;
  isValid: boolean;
  reference: React.RefObject<HTMLInputElement>;
}

export default class Birthday extends Component<MyProps> {
  render() {
    return (
      <div className="birthdayWrapper">
        <label>Birthday</label>
        <div className="bday-wrapper">
          <input type="date" name="dob" id="dob" ref={this.props.reference} />
          {!this.props.isValid && <p className="er-mes">{this.props.errorMessage}</p>}
        </div>
      </div>
    );
  }
}
