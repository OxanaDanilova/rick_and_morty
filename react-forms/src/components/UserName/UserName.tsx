import React, { ChangeEvent, Component } from 'react';
import './UserName.css';

interface MyProps {
  label: string;
  value: string;
  errorMessage: string;
  isValid: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default class UserName extends Component<MyProps> {
  render() {
    return (
      <div className="firstNameWrapper">
        <label>{this.props.label}</label>
        <input type="text" id="fname" value={this.props.value} onChange={this.props.onChange} />
        {!this.props.isValid && <p>{this.props.errorMessage}</p>}
      </div>
    );
  }
}
