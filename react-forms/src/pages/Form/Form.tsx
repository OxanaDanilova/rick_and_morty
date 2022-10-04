import UserName from 'components/UserName/UserName';
import React, { Component, ChangeEvent } from 'react';
import './Form.css';

type MyState = {
  firstName: string;
  firstNameValid: boolean;
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
    firstNameValid: true,
    secondName: '',
    dateOfBirth: '',
    country: '',
    gender: '',
    avatar: '',
    agreement: false,
    submitDisabled: false,
  };
  inputFirstName = React.createRef<HTMLInputElement>();
  /*inputLastName = React.createRef<HTMLInputElement>(); */

  onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, firstName: event.target.value });
  };
  onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    //console.log('magiiya', this.inputFirstName.current.value);
    if (this.inputFirstName.current && this.inputFirstName.current.value.length < 2) {
      this.setState({ ...this.state, firstNameValid: false });
    } else {
      this.setState({ ...this.state, firstNameValid: true });
    }
  };

  render() {
    return (
      <form id="createCardForm" onSubmit={(event: React.FormEvent) => this.onSubmitForm(event)}>
        <UserName
          label="First Name"
          reference={this.inputFirstName}
          //value={this.state.firstName}
          isValid={this.state.firstNameValid}
          errorMessage="Firstname schould contain more then 1 letter."
          //onChange={(event) => this.onChangeHandler(event)}
        />
        {/* <UserName label="Last Name" /> */}
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
