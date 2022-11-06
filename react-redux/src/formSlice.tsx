import { createSlice } from '@reduxjs/toolkit';
import { FormValues, FormCard, MyStateForm as MyState } from 'types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  formCards: [],
  formValues: {
    fname: '',
    lname: '',
    dob: '',
    country: '',
    gender: '',
    avatar: null,
    agreement: '',
  },
  initialForm: true,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormCards(state: MyState, { payload }: PayloadAction<FormCard[]>) {
      state.formCards = payload;
    },
    setFormValues(state: MyState, { payload }: PayloadAction<FormValues>) {
      state.formValues = payload;
    },
    setInitialForm(state: MyState, { payload }: PayloadAction<boolean>) {
      state.initialForm = payload;
    },
  },
});
export default formSlice.reducer;
export const { setFormCards, setFormValues, setInitialForm } = formSlice.actions;
