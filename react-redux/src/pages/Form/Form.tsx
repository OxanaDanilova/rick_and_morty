import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserName } from 'components/UserName/UserName';
import { Avatar } from 'components/Avatar/Avatar';
import { Birthday } from 'components/Birthday/Birthday';
import { Country } from 'components/Country/Country';
import { Gender } from 'components/Gender/Gender';
import { Agreement } from 'components/Agreement/Agreement';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hook';
import './Form.css';
import { MyStateSearch, MyStateForm, FormValues } from 'types';
import { setFormValues, setInitialForm, setFormCards } from '../../formSlice';

export default function Form() {
  const { initialForm, formValues, formCards } = useSelector(
    (state: { cards: MyStateSearch; form: MyStateForm }) => state.form
  );
  const dispatch = useAppDispatch();
  const [showCreateCardMes, setShowCreateMes] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  useEffect(() => {
    if (!initialForm) {
      setValue('fname', formValues.fname);
      setValue('lname', formValues.lname);
      setValue('dob', formValues.dob);
      setValue('country', formValues.country);
      setValue('gender', formValues.gender);
      setValue('agreement', formValues.agreement);
      if (formValues.avatar) {
        setValue('avatar', [formValues.avatar[0]]);
      }
    }

    return () => {
      dispatch(setFormValues(getValues()));
    };
  }, []);

  const onChange = () => {
    if (initialForm) {
      dispatch(setInitialForm(false));
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    let userAvatar = '';
    if (data.avatar) {
      userAvatar = URL.createObjectURL(data.avatar[0]);
    }
    dispatch(
      setFormCards([
        ...formCards,
        {
          firstName: data.fname,
          lastName: data.lname,
          birthday: data.dob,
          country: data.country,
          gender: data.gender ? 'Female' : 'Male',
          avatar: userAvatar,
        },
      ])
    );

    setShowCreateMes(true);
    dispatch(setInitialForm(true));

    setTimeout(() => {
      setShowCreateMes(false);
    }, 1500);

    reset();
  };

  return (
    <form id="createCardForm" onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
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
      <Birthday name="dob" register={register} rules={{ required: true }} errors={errors} />
      <Country name="country" register={register} rules={{ required: true }} errors={errors} />
      <Gender name="gender" register={register} errors={errors} />
      <Avatar name="avatar" register={register} rules={{ required: true }} errors={errors} />
      <Agreement name="agreement" register={register} rules={{ required: true }} errors={errors} />
      <div className="panelButtons">
        <input
          type="submit"
          value="Create Card"
          disabled={initialForm || Object.entries(errors).length ? true : false}
        />
        <input type="reset" value="Reset" />
      </div>
    </form>
  );
}
