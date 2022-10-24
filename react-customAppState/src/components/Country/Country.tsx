import React from 'react';
import {
  FieldErrorsImpl,
  RegisterOptions,
  UseFormRegister,
  Path,
  FieldValues,
} from 'react-hook-form';
import './Country.css';

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

export const Country = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
}: FormInputProps<TFormValues>): JSX.Element => {
  return (
    <div className="countryWrapper">
      <label>Country</label>
      <div className="select-wrapper">
        <select {...(register && register(name, rules))}>
          <option></option>
          <option>Germany</option>
          <option>Kasachstan</option>
          <option>Russia</option>
          <option>China</option>
          <option>Spain</option>
        </select>
        {errors.country && errors.country.type === 'required' && (
          <p className="er-mes" data-testid="countryErMes">
            This field is required
          </p>
        )}
      </div>
    </div>
  );
};
