import { Character, FormValues, FormCard, Info, MyState } from 'types';

import axios from 'axios';

//{ type: 'search-cards', payload: { ...state, dataArr: [...data.results] } }
export const searchCards = (dataArr: Character[]) => {
  return {
    type: 'search-cards',
    payload: { dataArr: dataArr },
  };
};

//{ type: 'search-cards', payload: { ...state, dataArr: [...data.results] } }
export const unsortedCards = (unsortedCards: Character[]) => {
  return {
    type: 'unsorted-cards',
    payload: { unsortedCards: unsortedCards },
  };
};

// { type: 'hasError', payload: { ...state, hasError: false } };
export const hasError = (error: boolean) => {
  return {
    type: 'search-cards',
    payload: { hasError: error },
  };
};

//{ type: 'isLoading', payload: { ...state, isLoading: false } }
export const isLoading = (isLoading: boolean) => {
  return {
    type: 'isLoading',
    payload: { isLoading: isLoading },
  };
};

/* export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts')
    return response.data
  }) */

// export const fetchCards = createAsyncThunk<Character[], string>(
//   'cards/fetch',
//   async (url: string) => {
//     try {
//       dispatch(isLoading(true));
//       // Fetch the backend endpoint:
//       const response = await fetch(url);
//       // Get the JSON from the response:
//       const data: Character[] = await response.json();
//       dispatch(info(data.info));
//       dispatch(allPages(data.info.pages));
//       dispatch(isLoading(false));

//       if (!data.results) {
//         throw new Error();
//       } else {
//         dispatch(searchCards([...data.results]));
//         dispatch(hasError(false));
//         dispatch(unsortedCards([...data.results]));
//         /*     if (state.sorting) {
//             sortCards(state.sorting, data.results);
//           } */
//       }
//       // Return result:
//       //return data;
//     } catch (error) {
//       dispatch(searchCards([]));
//       dispatch(hasError(true));
//     }
//   }
// );

/* export const getCardsApi = (url: string) => {
  return function (dispatch) {
    dispatch(isLoading());
    return axios.get(url).then(
      (res) => dispatch(searchCards(res)),
      (error) => dispatch(hasError(error))
    );
  };
}; */

//{ type: 'isLoading', payload: { ...state, isLoading: false } }
export const sorting = (sorting: string) => {
  return {
    type: 'sorting',
    payload: sorting,
  };
};

//      dispatch({ type: 'info', payload: { ...state, info: data.info } });
export const info = (info: Info | null) => {
  return {
    type: 'info',
    payload: info,
  };
};

//  dispatch({ type: 'currentPage', payload: { ...state, currentPage: state.currentPage - 1 } });
export const currentPage = (currentPage: number) => {
  return {
    type: 'currentPage',
    payload: currentPage,
  };
};

//   dispatch({ type: 'cardsPerPage', payload: { ...state, cardsPerPage: +target.value } });
export const cardsPerPage = (cardsPerPage: number) => {
  return {
    type: 'cardsPerPage',
    payload: cardsPerPage,
  };
};

//dispatch({ type: 'allPages', payload: { ...state, allPages: data.info.pages } });
export const allPages = (allPages: number) => {
  return {
    type: 'allPages',
    payload: allPages,
  };
};

//dispatch({ type: 'allPages', payload: { ...state, allPages: data.info.pages } });
export const formCards = (formCards: FormCard[]) => {
  return {
    type: 'form-cards',
    payload: formCards,
  };
};

//dispatch({ type: 'allPages', payload: { ...state, allPages: data.info.pages } });
export const formValues = (formValues: FormValues) => {
  return {
    type: 'formValues',
    payload: formValues,
  };
};

//dispatch({ type: 'allPages', payload: { ...state, allPages: data.info.pages } });
export const initialForm = (initialForm: boolean) => {
  return {
    type: 'initialForm',
    payload: initialForm,
  };
};
