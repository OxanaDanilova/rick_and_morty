import React, { useReducer } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import './App.css';
import FormPage from 'pages/Form/FormPage';
import Character from 'types';
import CardPage from 'components/Cards/Card/CardPage/CardPage';

interface MyAction {
  type: 'search-cards' | 'hasError' | 'isLoading' | 'sorting' | 'unsorted-cards';
  payload: {
    dataArr: Character[];
    hasError: boolean;
    isLoading: boolean;
    sorting: string;
    unsortedCards: Character[];
  };
}
interface MyState {
  dataArr: Character[];
  hasError: boolean;
  isLoading: boolean;
  sorting: string;
  unsortedCards: Character[];
}

export type GlobalContent = {
  state: {
    dataArr: Character[];
    hasError: boolean;
    isLoading: boolean;
    sorting: string;
    unsortedCards: Character[];
  };
  dispatch: (action: MyAction) => void;
};

export const reducer = (state: MyState, action: MyAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'search-cards': {
      return { ...state, dataArr: payload.dataArr };
    }
    case 'unsorted-cards': {
      return { ...state, unsortedCards: payload.dataArr };
    }
    case 'hasError': {
      return { ...state, hasError: payload.hasError };
    }
    case 'isLoading': {
      return { ...state, isLoading: payload.isLoading };
    }
    case 'sorting': {
      return { ...state, sorting: payload.sorting };
    }
    default:
      return state;
  }
};

export const AppContext = React.createContext<GlobalContent>({
  state: { dataArr: [], hasError: false, isLoading: false, sorting: '', unsortedCards: [] },
  dispatch: () => {},
});

function App() {
  const initialState = {
    dataArr: [],
    hasError: false,
    isLoading: false,
    sorting: '',
    unsortedCards: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
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
    </AppContext.Provider>
  );
}

export default App;
