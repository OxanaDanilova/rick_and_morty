import React from 'react';
import {
  FieldErrorsImpl,
  RegisterOptions,
  UseFormRegister,
  Path,
  FieldValues,
} from 'react-hook-form';
import './UserName.css';

export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  errorMessage: string;
  label: string;
  rules?: RegisterOptions;
  register: UseFormRegister<TFormValues>;
  errors: Partial<
    FieldErrorsImpl<{
      fname: string;
      lname: string;
      dob: string;
      country: string;
      gender: string;
      avatar: File[];
      agreement: string;
    }>
  >;
};

export const UserName = <TFormValues extends Record<string, unknown>>({
  name,
  label,
  errorMessage,
  register,
  rules,
  errors,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  const errorFieldValue = name === 'fname' ? 'fname' : 'lname';
  return (
    <div className="nameWrapper">
      <label>{label}</label>
      <div className="input-wrapper">
        <input
          type="text"
          data-testid="formusername"
          id="fname"
          {...props}
          {...(register && register(name, rules))}
        />
        {errors[errorFieldValue] && errors[errorFieldValue]?.type === 'required' && (
          <p className="er-mes" data-testid="userNameErMes">
            This field is required
          </p>
        )}
        {errors[errorFieldValue] && errors[errorFieldValue]?.type === 'minLength' && (
          <p className="er-mes">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};
