import React from 'react';
import './Agreement.css';
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
      avatar: File[];
      agreement: string;
    }>
  >;
};

export const Agreement = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
}: FormInputProps<TFormValues>): JSX.Element => {
  return (
    <div className="agreemWrapper">
      <label htmlFor="user-agreement">I consent to my personal data</label>
      <input
        data-testid="agreement"
        type="checkbox"
        id="user-agreement"
        {...(register && register(name, rules))}
      />
      {errors.agreement && errors.agreement.type === 'required' && (
        <p className="er-mes" data-testid="agreementErMes">
          This field is required
        </p>
      )}
    </div>
  );
};
