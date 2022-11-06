import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Character, FormValues, FormCard, Info, MyStateForm as MyState } from 'types';
import type { PayloadAction } from '@reduxjs/toolkit';

/* type FetchError = {
  message: string;
};

export const fetchCards = createAsyncThunk<
  { results: Character[]; info: Info },
  string,
  { rejectValue: FetchError }
>('cards/fetch', async (url: string, thunkApi) => {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      // Return the error message:
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch Characters.',
      });
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch Characters.',
    });
  }
}); */

const initialState = {
  dataArr: [],
  hasError: false,
  isLoading: false,
  sorting: '',
  unsortedCards: [],
  info: null,
  currentPage: 1,
  cardsPerPage: 20,
  allPages: 1,
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
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchCards.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(
  //       fetchCards.fulfilled,
  //       (state: MyState, { payload }: PayloadAction<{ results: Character[]; info: Info }>) => {
  //         state.unsortedCards = [...payload.results];
  //         state.isLoading = false;
  //         state.hasError = false;
  //         console.log(payload);
  //         state.info = { ...payload.info };
  //         state.allPages = payload.info.pages;
  //         state.dataArr = [...payload.results];
  //       }
  //     )
  //     .addCase(fetchCards.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.hasError = true;
  //       state.dataArr = [];
  //     });
  // },
});
export default formSlice.reducer;
export const { setFormCards, setFormValues, setInitialForm } = formSlice.actions;
