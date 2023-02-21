import React, { Component } from 'react';
import './Gender.css';

interface MyProps {
  reference: React.RefObject<HTMLInputElement>;
}

export default class Gender extends Component<MyProps> {
  render() {
    return (
      <div className="genderWrapper">
        <label className="switch">
          <input
            data-testid="gender"
            type="checkbox"
            name="gender"
            id="gender"
            ref={this.props.reference}
          />
          <span className="slider round"></span>
          <label id="male">Male</label>
          <label id="female">Female</label>
        </label>
      </div>
    );
  }
}
