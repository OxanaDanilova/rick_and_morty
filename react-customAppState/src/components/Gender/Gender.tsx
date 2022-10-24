import React from 'react';
import './Gender.css';
import {
  FieldErrorsImpl,
  RegisterOptions,
  UseFormRegister,
  Path,
  FieldValues,
} from 'react-hook-form';

type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register: UseFormRegister<TFormValues>;
  errors: Partial<
    FieldErrorsImpl<{
      fname: string;
      lname: string;
      dob: string;
      country: string;
      gender: string;
      avatar: FileList;
      agreement: string;
    }>
  >;
};

export const Gender = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
}: FormInputProps<TFormValues>): JSX.Element => {
  return (
    <div className="genderWrapper">
      <label className="switch">
        <input
          data-testid="gender"
          type="checkbox"
          id="gender"
          {...(register && register(name, rules))}
        />
        <span className="slider round"></span>
        <label id="male">Male</label>
        <label id="female">Female</label>
      </label>
    </div>
  );
};
