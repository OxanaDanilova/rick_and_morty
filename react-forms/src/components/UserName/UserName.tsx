import React, { Component } from 'react';
import './UserName.css';

interface MyProps {
  label: string;
  //value: string;
  errorMessage: string;
  isValid: boolean;
  //onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  reference: React.RefObject<HTMLInputElement>;
}

export default class UserName extends Component<MyProps> {
  render() {
    return (
      <div className="nameWrapper">
        <label>{this.props.label}</label>
        <div className="input-wrapper">
          <input
            ref={this.props.reference}
            type="text"
            id="fname" /* value={this.props.value} onChange={this.props.onChange} */
          />
          {!this.props.isValid && <p className="er-mes">{this.props.errorMessage}</p>}
        </div>
      </div>
    );
  }
}
