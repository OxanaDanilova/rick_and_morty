import React, { Component } from 'react';
import './Avatar.css';

interface MyProps {
  errorMessage: string;
  isValid: boolean;
  reference: React.RefObject<HTMLInputElement>;
}

export default class Avatar extends Component<MyProps> {
  render() {
    return (
      <div className="avatar-wrapper">
        <input type="file" name="avatar" id="avatar" ref={this.props.reference} />
        {!this.props.isValid && <p className="er-mes">{this.props.errorMessage}</p>}
      </div>
    );
  }
}
