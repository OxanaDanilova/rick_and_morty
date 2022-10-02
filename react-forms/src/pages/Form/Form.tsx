import UserName from 'components/UserName/UserName';
import React, { Component } from 'react';
import './Form.css';

type MyState = {
  firstName: string;
  secondName: string;
  dateOfBirth: string;
  country: string;
  gender: string;
  avatar: string;
  agreement: boolean;
  submitDisabled: boolean;
};
type MyProps = unknown;

export default class Form extends Component<MyProps, MyState> {
  state: MyState = {
    firstName: '',
    secondName: '',
    dateOfBirth: '',
    country: '',
    gender: '',
    avatar: '',
    agreement: false,
    submitDisabled: true,
  };
  render() {
    return (
      <form id="createCardForm">
        <UserName name="First Name" />
        <UserName name="Second Name" />
        <label>Date of birth</label>
        <input type="date" name="dob" id="dob" />
        <label>Country</label>
        <select>
          <option>Germany</option>
          <option>Kasachstan</option>
          <option>Russia</option>
          <option>China</option>
          <option>Spain</option>
        </select>
        <label className="switch">
          Male
          <input type="checkbox" name="gender" id="gender" />
          <span className="slider round"></span>Female
        </label>
        <input type="file" name="avatar" id="avatar" />
        <label htmlFor="user-agreement">I consent to my personal data</label>
        <input type="checkbox" name="user-agreement" id="user-agreement" />
        <input type="submit" value="Create Card" disabled={this.state.submitDisabled} />
        <input type="reset" value="Reset" />
      </form>
    );
  }
}
