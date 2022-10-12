import React, { Component } from 'react';
import './UserName.css';

interface MyProps {
  label: string;
  errorMessage: string;
  isValid: boolean;
  reference: React.RefObject<HTMLInputElement>;
}

export default class UserName extends Component<MyProps> {
  render() {
    return (
      <div className="nameWrapper">
        <label>{this.props.label}</label>
        <div className="input-wrapper">
          <input data-testid="formusername" ref={this.props.reference} type="text" id="fname" />
          {!this.props.isValid && <p className="er-mes">{this.props.errorMessage}</p>}
        </div>
      </div>
    );
  }
}
