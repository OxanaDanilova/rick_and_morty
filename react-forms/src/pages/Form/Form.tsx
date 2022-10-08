import Avatar from 'components/Avatar/Avatar';
import Birthday from 'components/Birthday/Birthday';
import Country from 'components/Country/Country';
import Gender from 'components/Gender/Gender';
import UserName from 'components/UserName/UserName';
import Agreement from 'components/Agreement/Agreement';
import React, { Component } from 'react';
import './Form.css';
import FormButtons from 'components/FormButtons/FormButtons';

interface Card {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  avatar: string;
}

type MyState = {
  isFormEdited: boolean;
  firstNameValid: boolean;
  lastNameValid: boolean;
  birthdayValid: boolean;
  countryValid: boolean;
  avatarValid: boolean;
  agreement: boolean;
  submitDisabled: boolean;
};
type MyProps = {
  createCard: (card: Card) => void;
};

export default class Form extends Component<MyProps, MyState> {
  state: MyState = {
    isFormEdited: false,
    firstNameValid: true,
    lastNameValid: true,
    birthdayValid: true,
    countryValid: true,
    avatarValid: true,
    agreement: true,
    submitDisabled: true,
  };
  inputFirstName = React.createRef<HTMLInputElement>();
  inputLastName = React.createRef<HTMLInputElement>();
  inputBirthday = React.createRef<HTMLInputElement>();
  selectCountry = React.createRef<HTMLSelectElement>();
  inputGender = React.createRef<HTMLInputElement>();
  inputAvatar = React.createRef<HTMLInputElement>();
  checkboxAgreement = React.createRef<HTMLInputElement>();

  /*  onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, firstName: event.target.value });
  }; */
  validationForm = async () => {
    let isFormValid = true;
    if (this.inputFirstName.current && this.inputFirstName.current.value.trim().length < 2) {
      await this.setState({ ...this.state, firstNameValid: false, submitDisabled: true });
      isFormValid = false;
    } else {
      /* this.setState((prevState) => {
        return {
          ...prevState,
          firstNameValid: true,
          submitDisabled: false,
        };
      }); */
      await this.setState({ ...this.state, firstNameValid: true });
    }

    if (this.inputLastName.current && this.inputLastName.current.value.trim().length < 2) {
      await this.setState({ ...this.state, lastNameValid: false, submitDisabled: true });
      isFormValid = false;
    } else {
      await this.setState({ ...this.state, lastNameValid: true });
    }
    if (
      (this.inputBirthday.current && new Date(this.inputBirthday.current.value) > new Date()) ||
      (this.inputBirthday.current && !this.inputBirthday.current.value)
    ) {
      await this.setState({ ...this.state, birthdayValid: false, submitDisabled: true });
      isFormValid = false;
    } else {
      await this.setState({ ...this.state, birthdayValid: true });
    }
    if (this.selectCountry.current && !this.selectCountry.current.value.trim()) {
      await this.setState({ ...this.state, countryValid: false, submitDisabled: true });
      isFormValid = false;
    } else {
      await this.setState({ ...this.state, countryValid: true });
    }
    if (this.inputAvatar.current && !this.inputAvatar.current.value) {
      await this.setState({ ...this.state, avatarValid: false, submitDisabled: true });
      isFormValid = false;
    } else {
      await this.setState({ ...this.state, avatarValid: true });
    }
    if (this.checkboxAgreement.current && !this.checkboxAgreement.current.checked) {
      await this.setState({ ...this.state, agreement: false, submitDisabled: true });
      isFormValid = false;
    } else {
      await this.setState({ ...this.state, agreement: true });
    }

    return isFormValid;
  };

  onSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    if (await this.validationForm()) {
      this.setState({ ...this.state, submitDisabled: false });
      if (
        this.inputAvatar.current &&
        this.inputAvatar.current.files &&
        this.inputFirstName.current &&
        this.inputLastName.current &&
        this.inputBirthday.current &&
        this.selectCountry.current
      ) {
        const avatar = URL.createObjectURL(this.inputAvatar.current.files[0]);
        this.props.createCard({
          firstName: this.inputFirstName.current.value,
          lastName: this.inputLastName.current.value,
          birthday: this.inputBirthday.current.value,
          country: this.selectCountry.current.value,
          avatar: avatar,
        });
      }
    }
  };

  onChangeForm = async () => {
    if (this.state.submitDisabled && this.state.isFormEdited) {
      if (await this.validationForm()) {
        this.setState({ ...this.state, submitDisabled: false });
      }
    }
    if (
      this.state.firstNameValid &&
      this.state.lastNameValid &&
      this.state.birthdayValid &&
      this.state.countryValid &&
      this.state.avatarValid &&
      this.state.agreement &&
      ((this.inputFirstName.current && this.inputFirstName.current.value.trim()) ||
        (this.inputLastName.current && this.inputLastName.current.value.trim()) ||
        (this.inputBirthday.current && this.inputBirthday.current.value.trim()) ||
        (this.selectCountry.current && this.selectCountry.current.value.trim()) ||
        (this.inputGender.current && this.inputGender.current.value.trim()) ||
        (this.inputAvatar.current && this.inputAvatar.current.value) ||
        (this.checkboxAgreement.current && this.checkboxAgreement.current.value))
    ) {
      this.setState({ ...this.state, isFormEdited: true, submitDisabled: false });
    }
  };

  render() {
    return (
      <form
        id="createCardForm"
        onChange={this.onChangeForm}
        onSubmit={(event: React.FormEvent) => this.onSubmitForm(event)}
        onReset={() =>
          this.setState({
            isFormEdited: false,
            firstNameValid: true,
            lastNameValid: true,
            birthdayValid: true,
            countryValid: true,
            avatarValid: true,
            agreement: true,
            submitDisabled: true,
          })
        }
      >
        <UserName
          label="First Name"
          reference={this.inputFirstName}
          isValid={this.state.firstNameValid}
          errorMessage="First Name schould contain more than 1 letter."
        />
        <UserName
          label="Last Name"
          reference={this.inputLastName}
          isValid={this.state.lastNameValid}
          errorMessage=" Last Name schould contain more than 1 letter."
        />
        <Birthday
          reference={this.inputBirthday}
          isValid={this.state.birthdayValid}
          errorMessage="Birthday must be before the current date."
        />
        <Country
          reference={this.selectCountry}
          errorMessage="This field is required."
          isValid={this.state.countryValid}
        />
        <Gender reference={this.inputGender} />
        <Avatar
          reference={this.inputAvatar}
          isValid={this.state.avatarValid}
          errorMessage="Add your avatar please."
        />
        <Agreement
          reference={this.checkboxAgreement}
          isValid={this.state.agreement}
          errorMessage="This field is required."
        />
        <FormButtons disabled={this.state.submitDisabled} />
      </form>
    );
  }
}
