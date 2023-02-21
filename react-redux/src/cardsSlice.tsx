import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Character, Info, MyStateSearch as MyState } from 'types';
import type { PayloadAction } from '@reduxjs/toolkit';

type FetchError = {
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
});

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
};

//export const selectStatus = (state: MyState) => state.todos.status;

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    searchCards(state: MyState, { payload }: PayloadAction<Character[]>) {
      state.dataArr = [...payload];
    },
    setCurrentPage(state: MyState, { payload }: PayloadAction<number>) {
      state.currentPage = payload;
    },
    setAllPages(state: MyState, { payload }: PayloadAction<number>) {
      state.allPages = payload;
    },
    setCardsPerPage(state: MyState, { payload }: PayloadAction<number>) {
      state.cardsPerPage = payload;
    },
    setSorting(state: MyState, { payload }: PayloadAction<string>) {
      state.sorting = payload;
    },
    setError(state: MyState, { payload }: PayloadAction<boolean>) {
      state.hasError = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCards.fulfilled,
        (state: MyState, { payload }: PayloadAction<{ results: Character[]; info: Info }>) => {
          state.unsortedCards = [...payload.results];
          state.isLoading = false;
          state.hasError = false;
          state.info = { ...payload.info };
          state.allPages = payload.info.pages;
          state.dataArr = [...payload.results];
        }
      )
      .addCase(fetchCards.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.dataArr = [];
      });
  },
});
export default cardsSlice.reducer;
export const { searchCards, setCurrentPage, setAllPages, setCardsPerPage, setSorting, setError } =
  cardsSlice.actions;
