// import { Character, MyState, FormValues, FormCard, Info, MyAction } from 'types';

// const initialState = {
//   dataArr: [],
//   hasError: false,
//   isLoading: false,
//   sorting: '',
//   unsortedCards: [],
//   info: null,
//   currentPage: 1,
//   cardsPerPage: 20,
//   allPages: 1,
//   formCards: [],
//   formValues: {
//     fname: '',
//     lname: '',
//     dob: '',
//     country: '',
//     gender: '',
//     avatar: null,
//     agreement: '',
//   },
//   initialForm: true,
// };

// const reducer = (state: MyState = initialState, action: MyAction) => {
//   const { type, payload } = action;
//   switch (type) {
//     case 'search-cards': {
//       console.log('payload.dataArr', payload.dataArr);
//       return { ...state, dataArr: [...payload.dataArr] };
//     }
//     case 'form-cards': {
//       return { ...state, formCards: payload.formCards };
//     }
//     case 'unsorted-cards': {
//       return { ...state, unsortedCards: payload.dataArr };
//     }
//     case 'hasError': {
//       return { ...state, hasError: payload.hasError };
//     }
//     case 'isLoading': {
//       return { ...state, isLoading: payload.isLoading };
//     }
//     case 'sorting': {
//       return { ...state, sorting: payload.sorting };
//     }
//     case 'info': {
//       return { ...state, info: payload.info };
//     }
//     case 'currentPage': {
//       return { ...state, currentPage: payload.currentPage };
//     }
//     case 'cardsPerPage': {
//       return { ...state, cardsPerPage: payload.cardsPerPage };
//     }
//     case 'allPages': {
//       return { ...state, allPages: payload.allPages };
//     }
//     case 'formValues': {
//       return { ...state, formValues: payload.formValues };
//     }
//     case 'initialForm': {
//       return { ...state, initialForm: payload.initialForm };
//     }
//     default:
//       return state;
//   }
// };

// export default reducer;
