import React, { useReducer } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import './App.css';
import FormPage from 'pages/Form/FormPage';
//import { Character, MyState } from 'types';
import CardPage from 'components/Cards/Card/CardPage/CardPage';

// export type GlobalContent = {
//   state: {
//     dataArr: Character[];
//     hasError: boolean;
//     isLoading: boolean;
//     sorting: string;
//     unsortedCards: Character[];
//     info: null | Info;
//     currentPage: number;
//     cardsPerPage: number;
//     allPages: number;
//     formCards: FormCard[];
//     formValues: FormValues;
//     initialForm: boolean;
//   };
//   dispatch: (action: MyAction) => void;
// };

// export const reducer = (state: MyState, action: MyAction) => {
//   const { type, payload } = action;
//   switch (type) {
//     case 'search-cards': {
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

// export const AppContext = React.createContext<GlobalContent>({
//   state: {
//     dataArr: [],
//     hasError: false,
//     isLoading: false,
//     sorting: '',
//     unsortedCards: [],
//     info: null,
//     currentPage: 1,
//     cardsPerPage: 20,
//     allPages: 1,
//     formCards: [],
//     formValues: {
//       fname: '',
//       lname: '',
//       dob: '',
//       country: '',
//       gender: '',
//       avatar: null,
//       agreement: '',
//     },
//     initialForm: true,
//   },
//   dispatch: () => {},
// });

function App() {
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
  //const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // <AppContext.Provider value={{ state, dispatch }}>
    <div className="App">
      <nav>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" end data-testid="homePageLink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/form" end data-testid="formPageLink">
              Form
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" data-testid="aboutPageLink">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
    //  </AppContext.Provider>
  );
}

export default App;
