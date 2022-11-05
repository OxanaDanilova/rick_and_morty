import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Character, FormValues, FormCard, Info, MyState } from 'types';
import type { PayloadAction } from '@reduxjs/toolkit';

type FetchError = {
  message: string;
};

export const fetchCards = createAsyncThunk<Character[], string, { rejectValue: FetchError }>(
  'cards/fetch',
  async (url: string, thunkApi) => {
    try {
      const response = await fetch(url);
      if (response.status !== 200) {
        // Return the error message:
        return thunkApi.rejectWithValue({
          message: 'Failed to fetch Characters.',
        });
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch Characters.',
      });
    }
  }
);

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

//export const selectStatus = (state: MyState) => state.todos.status;

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    // searchCards(state, action: PayloadAction<Character[]>) {
    //   state.dataArr = [...payload.dataArr];
    // },
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCards.fulfilled, (state: MyState, { payload }: PayloadAction<Character[]>) => {
        state.isLoading = false;
        state.hasError = false;
        // Add any fetched posts to the array
        //  const newState = payload.forEach((char)=>(newState[]))
        console.log(payload);
        state.dataArr = [...payload];
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});
export default cardsSlice.reducer;
//export const { searchCards } = cardsSlice.actions;
