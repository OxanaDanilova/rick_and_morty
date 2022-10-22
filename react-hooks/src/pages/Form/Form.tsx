import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserName } from 'components/UserName/UserName';
import { Avatar } from 'components/Avatar/Avatar';
import { Birthday } from 'components/Birthday/Birthday';
import { Country } from 'components/Country/Country';
import { Gender } from 'components/Gender/Gender';
import { Agreement } from 'components/Agreement/Agreement';
import './Form.css';

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
      <Birthday name="dob" register={register} rules={{ required: true }} errors={errors} />
      <Country name="country" register={register} rules={{ required: true }} errors={errors} />
      <Gender name="gender" register={register} errors={errors} />
      <Avatar name="avatar" register={register} rules={{ required: true }} errors={errors} />
      <Agreement name="agreement" register={register} rules={{ required: true }} errors={errors} />
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
