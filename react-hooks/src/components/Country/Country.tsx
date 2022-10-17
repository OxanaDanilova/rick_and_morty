import React, { Component } from 'react';
import './Country.css';

interface MyProps {
  errorMessage: string;
  isValid: boolean;
  reference: React.RefObject<HTMLSelectElement>;
}

export default class Country extends Component<MyProps> {
  render() {
    return (
      <div className="countryWrapper">
        <label>Country</label>
        <div className="select-wrapper">
          <select ref={this.props.reference}>
            <option></option>
            <option>Germany</option>
            <option>Kasachstan</option>
            <option>Russia</option>
            <option>China</option>
            <option>Spain</option>
          </select>
          {!this.props.isValid && <p className="er-mes">{this.props.errorMessage}</p>}
        </div>
      </div>
    );
  }
}
