import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import '../../FormTest.css';
import { UserName } from 'components/UserName/UserName';

type FormValues = {
  fname: string;
  lname: string;
  dob: string;
  country: string;
  gender: string;
  avatar: FileList;
  agreement: string;
};
interface Card {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  avatar: string;
  gender: string;
}
type MyProps = {
  createCard: (card: Card) => void;
};

export default function Form({ createCard }: MyProps) {
  const [showCreateCardMes, setShowCreateMes] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('data', data);
    const userAvatar = URL.createObjectURL(data.avatar[0]);
    createCard({
      firstName: data.fname,
      lastName: data.lname,
      birthday: data.dob,
      country: data.country,
      gender: data.gender ? 'Female' : 'Male',
      avatar: userAvatar,
    });
    setShowCreateMes(true);

    setTimeout(() => {
      setShowCreateMes(false);
    }, 1500);

    reset();
  };

  return (
    <form id="createCardForm" onSubmit={handleSubmit(onSubmit)}>
      <p className="createCardMes" style={{ opacity: showCreateCardMes ? '100%' : '0' }}>
        The card was created.
      </p>
      <UserName
        name="fname"
        label="First Name"
        register={register}
        rules={{ required: true, minLength: 2 }}
        errors={errors}
        errorMessage="First Name schould contain more than 1 letter."
      />
      <UserName
        name="lname"
        label="Last Name"
        register={register}
        rules={{ required: true, minLength: 2 }}
        errors={errors}
        errorMessage="Last Name schould contain more than 1 letter."
      />

      {/*  <div className="nameWrapper">
        <label>First name</label>
        <div className="input-wrapper">
          <input
            data-testid="formusername"
            type="text"
            id="fname"
            {...register('fname', { required: true, minLength: 2 })}
          />
          {errors.fname && errors.fname.type === 'required' && (
            <p className="er-mes">This is required</p>
          )}
          {errors.fname && errors.fname.type === 'minLength' && (
            <p className="er-mes">First name should be more than 1 letter</p>
          )}
        </div>
      </div> 
        <div className="nameWrapper">
          <label>Last name</label>
          <div className="input-wrapper">
            <input
              data-testid="formusername"
              type="text"
              id="lname"
              {...register('lname', { required: true, minLength: 2 })}
            />
            {errors.lname && errors.lname.type === 'required' && (
              <p className="er-mes">This is required</p>
            )}
            {errors.lname && errors.lname.type === 'minLength' && (
              <p className="er-mes">Last name should be more than 1 letter</p>
            )}
          </div>
        </div>
        */}

      <div className="birthdayWrapper">
        <label>Birthday</label>
        <div className="bday-wrapper">
          <input
            type="date"
            id="dob"
            {...register('dob', {
              required: true,
            })}
          />

          {errors.dob && errors.dob.type === 'required' && (
            <p className="er-mes">This is required</p>
          )}
        </div>
      </div>
      <div className="countryWrapper">
        <label>Country</label>
        <div className="select-wrapper">
          <select {...register('country', { required: true })}>
            <option></option>
            <option>Germany</option>
            <option>Kasachstan</option>
            <option>Russia</option>
            <option>China</option>
            <option>Spain</option>
          </select>
          {errors.lname && errors.lname.type === 'required' && (
            <p className="er-mes">This is required</p>
          )}
        </div>
      </div>

      <div className="genderWrapper">
        <label className="switch">
          <input data-testid="gender" type="checkbox" id="gender" {...register('gender')} />
          <span className="slider round"></span>
          <label id="male">Male</label>
          <label id="female">Female</label>
        </label>
      </div>
      <div className="avatar-wrapper">
        <input
          data-testid="avatar"
          type="file"
          id="avatar"
          {...register('avatar', { required: true })}
        />
        {errors.avatar && errors.avatar.type === 'required' && (
          <p className="er-mes">This is required</p>
        )}
      </div>
      <div className="agreemWrapper">
        <label htmlFor="user-agreement">I consent to my personal data</label>
        <input
          data-testid="agreement"
          type="checkbox"
          id="user-agreement"
          {...register('agreement', { required: true })}
        />
        {errors.agreement && errors.agreement.type === 'required' && (
          <p className="er-mes">This is required</p>
        )}
      </div>

      <div className="panelButtons">
        <input
          type="submit"
          value="Create Card"
          disabled={Object.entries(errors).length ? true : false}
        />
        <input type="reset" value="Reset" />
      </div>
    </form>
  );
}

// import Avatar from 'components/Avatar/Avatar';
// import Birthday from 'components/Birthday/Birthday';
// import Country from 'components/Country/Country';
// import Gender from 'components/Gender/Gender';

// import Agreement from 'components/Agreement/Agreement';
// import React, { useState } from 'react';
// import './Form.css';
// import FormButtons from 'components/FormButtons/FormButtons';

// interface Card {
//   firstName: string;
//   lastName: string;
//   birthday: string;
//   country: string;
//   avatar: string;
//   gender: string;
// }

// type MyState = {
//   isFormEdited: boolean;
//   firstNameValid: boolean;
//   lastNameValid: boolean;
//   birthdayValid: boolean;
//   countryValid: boolean;
//   avatarValid: boolean;
//   agreement: boolean;
//   submitDisabled: boolean;
//   showCreateCardMes: boolean;
// };
// type MyProps = {
//   createCard: (card: Card) => void;
// };

/* export default function Form({ createCard }: MyProps) {
  const [formState, setFormState] = useState<MyState>({
    isFormEdited: false,
    firstNameValid: true,
    lastNameValid: true,
    birthdayValid: true,
    countryValid: true,
    avatarValid: true,
    agreement: true,
    submitDisabled: true,
    showCreateCardMes: false,
  });
  const [firstNameValid, setFirstNameValid] = useState<boolean>(true);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  const myForm = React.createRef<HTMLFormElement>();
  const inputFirstName = React.createRef<HTMLInputElement>();
  const inputLastName = React.createRef<HTMLInputElement>();
  const inputBirthday = React.createRef<HTMLInputElement>();
  const selectCountry = React.createRef<HTMLSelectElement>();
  const inputGender = React.createRef<HTMLInputElement>();
  const inputAvatar = React.createRef<HTMLInputElement>();
  const checkboxAgreement = React.createRef<HTMLInputElement>();

  const validationForm = async (event: React.FormEvent) => {
    switch (event.target) {
      case inputFirstName.current: {
        if (inputFirstName.current && inputFirstName.current.value.trim().length < 2) {
          setFormState({ ...formState, firstNameValid: false, submitDisabled: true });
          /*   await this.setState((prevState) => {
            return {
              ...prevState,
              firstNameValid: false,
              submitDisabled: true,
            };
          }); 
        } else {
          setFormState({ ...formState, firstNameValid: true });
          /*   await this.setState((prevState) => {
            return {
              ...prevState,
              firstNameValid: true,
            };
          }); 
        }
        break;
      }
      case inputLastName.current: {
        if (inputLastName.current && inputLastName.current.value.trim().length < 2) {
          setFormState({ ...formState, lastNameValid: false, submitDisabled: true });
          /*   await this.setState((prevState) => {
            return {
              ...prevState,
              lastNameValid: false,
              submitDisabled: true,
            };
          }); 
        } else {
          setFormState({ ...formState, lastNameValid: true });
          /* await this.setState((prevState) => {
            return {
              ...prevState,
              lastNameValid: true,
            };
          }); 
        }
        break;
      }
      case inputBirthday.current: {
        if (
          (inputBirthday.current && new Date(inputBirthday.current.value) > new Date()) ||
          (inputBirthday.current && !inputBirthday.current.value)
        ) {
          setFormState({ ...formState, birthdayValid: false, submitDisabled: true });
          /* await this.setState((prevState) => {
            return {
              ...prevState,
              birthdayValid: false,
              submitDisabled: true,
            };
          }); 
        } else {
          setFormState({ ...formState, birthdayValid: true });
          /* await this.setState((prevState) => {
            return {
              ...prevState,
              birthdayValid: true,
            };
          }); 
        }
        break;
      }
      case selectCountry.current: {
        if (selectCountry.current && !selectCountry.current.value.trim()) {
          setFormState({ ...formState, countryValid: false, submitDisabled: true });
          /* await this.setState((prevState) => {
            return {
              ...prevState,
              countryValid: false,
              submitDisabled: true,
            };
          }); 
        } else {
          setFormState({ ...formState, countryValid: true });
          /*  await this.setState((prevState) => {
            return {
              ...prevState,
              countryValid: true,
            };
          }); 
        }
        break;
      }
      case inputAvatar.current: {
        if (inputAvatar.current && !inputAvatar.current.value) {
          setFormState({ ...formState, avatarValid: false, submitDisabled: true });
          /*  await this.setState((prevState) => {
            return {
              ...prevState,
              avatarValid: false,
              submitDisabled: true,
            };
          }); 
        } else {
          setFormState({ ...formState, avatarValid: true });
          /*   await this.setState((prevState) => {
            return {
              ...prevState,
              avatarValid: true,
            };
          }); 
        }
        break;
      }
      case checkboxAgreement.current: {
        if (checkboxAgreement.current && !checkboxAgreement.current.checked) {
          setFormState({ ...formState, agreement: false, submitDisabled: true });
          /* await this.setState((prevState) => {
            return {
              ...prevState,
              agreement: false,
              submitDisabled: true,
            };
          }); 
        } else {
          setFormState({ ...formState, agreement: true });
          /*  await this.setState((prevState) => {
            return {
              ...prevState,
              agreement: true,
            };
          }); 
        }
        break;
      }
      case myForm.current: {
        console.log('ich bin hier');
        if (inputFirstName.current && inputFirstName.current.value.trim().length < 2) {
          console.log('error Name');
          setFirstNameValid(false);
          setSubmitDisabled(true);

          //await setFormState({ ...formState, firstNameValid: false, submitDisabled: true });

          /*  await this.setState((prevState) => {
            return {
              ...prevState,
              firstNameValid: false,
              submitDisabled: true,
            };
          }); 
        } else {
          setFormState({ ...formState, firstNameValid: true });
          /* await this.setState((prevState) => {
            return {
              ...prevState,
              firstNameValid: true,
            };
          }); 
        }
        if (inputLastName.current && inputLastName.current.value.trim().length < 2) {
          setFormState({ ...formState, lastNameValid: false, submitDisabled: true });
          /* await this.setState((prevState) => {
            return {
              ...prevState,
              lastNameValid: false,
              submitDisabled: true,
            };
          }); 
        } else {
          setFormState({ ...formState, lastNameValid: true });
          /* await this.setState((prevState) => {
            return {
              ...prevState,
              lastNameValid: true,
            };
          }); 
        }
        if (
          (inputBirthday.current && new Date(inputBirthday.current.value) > new Date()) ||
          (inputBirthday.current && !inputBirthday.current.value)
        ) {
          setFormState({ ...formState, birthdayValid: false, submitDisabled: true });
           await this.setState((prevState) => {
            return {
              ...prevState,
              birthdayValid: false,
              submitDisabled: true,
            };
          }); 
        } else {
          setFormState({ ...formState, birthdayValid: true });
          /*  await this.setState((prevState) => {
            return {
              ...prevState,
              birthdayValid: true,
            };
          }); 
        }
        if (selectCountry.current && !selectCountry.current.value.trim()) {
          setFormState({ ...formState, countryValid: false, submitDisabled: true });
          /* await this.setState((prevState) => {
            return {
              ...prevState,
              countryValid: false,
              submitDisabled: true,
            };
          }); 
        } else {
          setFormState({ ...formState, countryValid: true });
          /*  await this.setState((prevState) => {
            return {
              ...prevState,
              countryValid: true,
            };
          }); 
        }
        if (inputAvatar.current && !inputAvatar.current.value) {
          setFormState({ ...formState, avatarValid: false, submitDisabled: true });
          /* await this.setState((prevState) => {
            return {
              ...prevState,
              avatarValid: false,
              submitDisabled: true,
            };
          }); 
        } else {
          setFormState({ ...formState, avatarValid: true });
          /*    await this.setState((prevState) => {
            return {
              ...prevState,
              avatarValid: true,
            };
          }); 
        }
        if (checkboxAgreement.current && !checkboxAgreement.current.checked) {
          setFormState({ ...formState, agreement: false, submitDisabled: true });
          /*  await this.setState((prevState) => {
            return {
              ...prevState,
              agreement: false,
              submitDisabled: true,
            };
          }); 
        } else {
          setFormState({ ...formState, agreement: true });

        }
        break;
      }
      default:
        console.log('default');
        break;
    }
    return (
      formState.firstNameValid &&
      formState.lastNameValid &&
      formState.birthdayValid &&
      formState.countryValid &&
      formState.avatarValid &&
      formState.agreement
    );
  };

  const onSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    if (await validationForm(event)) {
      setFormState({ ...formState, submitDisabled: false });

      if (
        inputAvatar.current &&
        inputAvatar.current.files &&
        inputFirstName.current &&
        inputLastName.current &&
        inputBirthday.current &&
        inputGender.current &&
        selectCountry.current
      ) {
        const avatar = URL.createObjectURL(inputAvatar.current.files[0]);
        createCard({
          firstName: inputFirstName.current.value,
          lastName: inputLastName.current.value,
          birthday: inputBirthday.current.value,
          country: selectCountry.current.value,
          gender: inputGender.current.checked ? 'Female' : 'Male',
          avatar: avatar,
        });
        setFormState({ ...formState, showCreateCardMes: true });
        myForm.current && myForm.current.reset();
        setFormState({
          ...formState,
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
          setFormState({ ...formState, showCreateCardMes: false });
        }, 1500);
      }
    }
  };

  const onChangeForm = async (event: React.FormEvent) => {
    if (formState.isFormEdited && formState.submitDisabled) {
      if (await validationForm(event)) {
        setFormState({ ...formState, submitDisabled: false });
      }
    }
    if (
      formState.firstNameValid &&
      formState.lastNameValid &&
      formState.birthdayValid &&
      formState.countryValid &&
      formState.avatarValid &&
      formState.agreement &&
      ((inputFirstName.current && inputFirstName.current.value.trim()) ||
        (inputLastName.current && inputLastName.current.value.trim()) ||
        (inputBirthday.current && inputBirthday.current.value.trim()) ||
        (selectCountry.current && selectCountry.current.value.trim()) ||
        (inputGender.current && inputGender.current.value.trim()) ||
        (inputAvatar.current && inputAvatar.current.value) ||
        (checkboxAgreement.current && checkboxAgreement.current.value))
    ) {
      setFormState({ ...formState, isFormEdited: true, submitDisabled: false });
    }
  };

  return (
    <form
      ref={myForm}
      id="createCardForm"
      onChange={(event: React.FormEvent) => onChangeForm(event)}
      onSubmit={(event: React.FormEvent) => onSubmitForm(event)}
      onReset={() =>
        setFormState({
          ...formState,
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
      <p className="createCardMes" style={{ opacity: formState.showCreateCardMes ? '100%' : '0' }}>
        The card was created.
      </p>
      <UserName
        label="First Name"
        reference={inputFirstName}
        isValid={formState.firstNameValid}
        errorMessage="First Name schould contain more than 1 letter."
      />
      <UserName
        label="Last Name"
        reference={inputLastName}
        isValid={formState.lastNameValid}
        errorMessage=" Last Name schould contain more than 1 letter."
      />
      <Birthday
        reference={inputBirthday}
        isValid={formState.birthdayValid}
        errorMessage="Birthday must be before the current date."
      />
      <Country
        reference={selectCountry}
        errorMessage="This field is required."
        isValid={formState.countryValid}
      />
      <Gender reference={inputGender} />
      <Avatar
        reference={inputAvatar}
        isValid={formState.avatarValid}
        errorMessage="Add your avatar please."
      />
      <Agreement
        reference={checkboxAgreement}
        isValid={formState.agreement}
        errorMessage="This field is required."
      />
      <FormButtons disabled={formState.submitDisabled} />
    </form>
  );
}
 */
