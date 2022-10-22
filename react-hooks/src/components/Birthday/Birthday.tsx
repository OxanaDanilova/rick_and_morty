import React from 'react';
import {
  FieldErrorsImpl,
  RegisterOptions,
  UseFormRegister,
  Path,
  FieldValues,
} from 'react-hook-form';
import './Birthday.css';

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

export const Birthday = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
}: FormInputProps<TFormValues>): JSX.Element => {
  return (
    <div className="birthdayWrapper">
      <label>Birthday</label>
      <div className="bday-wrapper">
        <input type="date" id="dob" {...(register && register(name, rules))} />
        {errors.dob && errors.dob.type === 'required' && (
          <p className="er-mes" data-testid="birthdayErMes">
            This field is required
          </p>
        )}
      </div>
    </div>
  );
};
