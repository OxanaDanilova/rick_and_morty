import React from 'react';
import './Avatar.css';
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

export const Avatar = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
}: FormInputProps<TFormValues>): JSX.Element => {
  return (
    <div className="avatar-wrapper">
      <input
        data-testid="avatar"
        type="file"
        id="avatar"
        {...(register && register(name, rules))}
      />
      {errors.avatar && errors.avatar.type === 'required' && (
        <p className="er-mes">This field is required</p>
      )}
    </div>
  );
};
