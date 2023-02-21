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
  gender: string;
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
  showCreateCardMes: boolean;
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
    showCreateCardMes: false,
  };

  myForm = React.createRef<HTMLFormElement>();
  inputFirstName = React.createRef<HTMLInputElement>();
  inputLastName = React.createRef<HTMLInputElement>();
  inputBirthday = React.createRef<HTMLInputElement>();
  selectCountry = React.createRef<HTMLSelectElement>();
  inputGender = React.createRef<HTMLInputElement>();
  inputAvatar = React.createRef<HTMLInputElement>();
  checkboxAgreement = React.createRef<HTMLInputElement>();

  validationForm = async (event: React.FormEvent) => {
    switch (event.target) {
      case this.inputFirstName.current: {
        if (this.inputFirstName.current && this.inputFirstName.current.value.trim().length < 2) {
          await this.setState((prevState) => {
            return {
              ...prevState,
              firstNameValid: false,
              submitDisabled: true,
            };
          });
        } else {
          await this.setState((prevState) => {
            return {
              ...prevState,
              firstNameValid: true,
            };
          });
        }
        break;
      }
      case this.inputLastName.current: {
        if (this.inputLastName.current && this.inputLastName.current.value.trim().length < 2) {
          await this.setState((prevState) => {
            return {
              ...prevState,
              lastNameValid: false,
              submitDisabled: true,
            };
          });
        } else {
          await this.setState((prevState) => {
            return {
              ...prevState,
              lastNameValid: true,
            };
          });
        }
        break;
      }
      case this.inputBirthday.current: {
        if (
          (this.inputBirthday.current && new Date(this.inputBirthday.current.value) > new Date()) ||
          (this.inputBirthday.current && !this.inputBirthday.current.value)
        ) {
          await this.setState((prevState) => {
            return {
              ...prevState,
              birthdayValid: false,
              submitDisabled: true,
            };
          });
        } else {
          await this.setState((prevState) => {
            return {
              ...prevState,
              birthdayValid: true,
            };
          });
        }
        break;
      }
      case this.selectCountry.current: {
        if (this.selectCountry.current && !this.selectCountry.current.value.trim()) {
          await this.setState((prevState) => {
            return {
              ...prevState,
              countryValid: false,
              submitDisabled: true,
            };
          });
        } else {
          await this.setState((prevState) => {
            return {
              ...prevState,
              countryValid: true,
            };
          });
        }
        break;
      }
      case this.inputAvatar.current: {
        if (this.inputAvatar.current && !this.inputAvatar.current.value) {
          await this.setState((prevState) => {
            return {
              ...prevState,
              avatarValid: false,
              submitDisabled: true,
            };
          });
        } else {
          await this.setState((prevState) => {
            return {
              ...prevState,
              avatarValid: true,
            };
          });
        }
        break;
      }
      case this.checkboxAgreement.current: {
        if (this.checkboxAgreement.current && !this.checkboxAgreement.current.checked) {
          await this.setState((prevState) => {
            return {
              ...prevState,
              agreement: false,
              submitDisabled: true,
            };
          });
        } else {
          await this.setState((prevState) => {
            return {
              ...prevState,
              agreement: true,
            };
          });
        }
        break;
      }
      case this.myForm.current: {
        if (this.inputFirstName.current && this.inputFirstName.current.value.trim().length < 2) {
          await this.setState((prevState) => {
            return {
              ...prevState,
              firstNameValid: false,
              submitDisabled: true,
            };
          });
        } else {
          await this.setState((prevState) => {
            return {
              ...prevState,
              firstNameValid: true,
            };
          });
        }
        if (this.inputLastName.current && this.inputLastName.current.value.trim().length < 2) {
          await this.setState((prevState) => {
            return {
              ...prevState,
              lastNameValid: false,
              submitDisabled: true,
            };
          });
        } else {
          await this.setState((prevState) => {
            return {
              ...prevState,
              lastNameValid: true,
            };
          });
        }
        if (
          (this.inputBirthday.current && new Date(this.inputBirthday.current.value) > new Date()) ||
          (this.inputBirthday.current && !this.inputBirthday.current.value)
        ) {
          await this.setState((prevState) => {
            return {
              ...prevState,
              birthdayValid: false,
              submitDisabled: true,
            };
          });
        } else {
          await this.setState((prevState) => {
            return {
              ...prevState,
              birthdayValid: true,
            };
          });
        }
        if (this.selectCountry.current && !this.selectCountry.current.value.trim()) {
          await this.setState((prevState) => {
            return {
              ...prevState,
              countryValid: false,
              submitDisabled: true,
            };
          });
        } else {
          await this.setState((prevState) => {
            return {
              ...prevState,
              countryValid: true,
            };
          });
        }
        if (this.inputAvatar.current && !this.inputAvatar.current.value) {
          await this.setState((prevState) => {
            return {
              ...prevState,
              avatarValid: false,
              submitDisabled: true,
            };
          });
        } else {
          await this.setState((prevState) => {
            return {
              ...prevState,
              avatarValid: true,
            };
          });
        }
        if (this.checkboxAgreement.current && !this.checkboxAgreement.current.checked) {
          await this.setState((prevState) => {
            return {
              ...prevState,
              agreement: false,
              submitDisabled: true,
            };
          });
        } else {
          await this.setState((prevState) => {
            return {
              ...prevState,
              agreement: true,
            };
          });
        }
        break;
      }
      default:
        console.log('default');
        break;
    }
    return (
      this.state.firstNameValid &&
      this.state.lastNameValid &&
      this.state.birthdayValid &&
      this.state.countryValid &&
      this.state.avatarValid &&
      this.state.agreement
    );
  };

  onSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    if (await this.validationForm(event)) {
      this.setState({ ...this.state, submitDisabled: false });
      if (
        this.inputAvatar.current &&
        this.inputAvatar.current.files &&
        this.inputFirstName.current &&
        this.inputLastName.current &&
        this.inputBirthday.current &&
        this.inputGender.current &&
        this.selectCountry.current
      ) {
        const avatar = URL.createObjectURL(this.inputAvatar.current.files[0]);
        this.props.createCard({
          firstName: this.inputFirstName.current.value,
          lastName: this.inputLastName.current.value,
          birthday: this.inputBirthday.current.value,
          country: this.selectCountry.current.value,
          gender: this.inputGender.current.checked ? 'Female' : 'Male',
          avatar: avatar,
        });
        this.setState({ ...this.state, showCreateCardMes: true });
        this.myForm.current && this.myForm.current.reset();
        this.setState({
          isFormEdited: false,
          firstNameValid: true,
          lastNameValid: true,
          birthdayValid: true,
          countryValid: true,
          avatarValid: true,
          agreement: true,
          submitDisabled: true,
        });
        setTimeout(() => {
          this.setState({ ...this.state, showCreateCardMes: false });
        }, 1500);
      }
    }
  };

  onChangeForm = async (event: React.FormEvent) => {
    if (this.state.isFormEdited && this.state.submitDisabled) {
      if (await this.validationForm(event)) {
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
        ref={this.myForm}
        id="createCardForm"
        onChange={(event: React.FormEvent) => this.onChangeForm(event)}
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
        <p
          className="createCardMes"
          style={{ opacity: this.state.showCreateCardMes ? '100%' : '0' }}
        >
          The card was created.
        </p>
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
