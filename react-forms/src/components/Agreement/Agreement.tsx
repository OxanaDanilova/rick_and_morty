import React, { Component } from 'react';
import './Agreement.css';

interface MyProps {
  errorMessage: string;
  isValid: boolean;
  reference: React.RefObject<HTMLInputElement>;
}
export default class Agreement extends Component<MyProps> {
  render() {
    return (
      <div className="agreemWrapper">
        <label htmlFor="user-agreement">I consent to my personal data</label>
        <input
          type="checkbox"
          name="user-agreement"
          id="user-agreement"
          ref={this.props.reference}
        />
        {!this.props.isValid && <p className="er-mes">{this.props.errorMessage}</p>}
      </div>
    );
  }
}
