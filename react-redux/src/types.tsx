export interface Character {
  gender: string;
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

export type FormValues = {
  fname: string;
  lname: string;
  dob: string;
  country: string;
  gender: string;
  avatar: File[] | null;
  agreement: string;
};

export interface FormCard {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  avatar: string;
  gender: string;
}

export type Info = {
  count: number;
  next: null | string;
  pages: number;
  prev: null | string;
};

export interface MyAction {
  type:
    | 'search-cards'
    | 'hasError'
    | 'isLoading'
    | 'sorting'
    | 'unsorted-cards'
    | 'info'
    | 'currentPage'
    | 'cardsPerPage'
    | 'allPages'
    | 'form-cards'
    | 'formValues'
    | 'initialForm';
  payload: {
    dataArr: Character[];
    hasError: boolean;
    isLoading: boolean;
    sorting: string;
    unsortedCards: Character[];
    info: Info | null;
    currentPage: number;
    cardsPerPage: number;
    allPages: number;
    formCards: FormCard[];
    formValues: FormValues;
    initialForm: boolean;
  };
}

export interface MyStateSearch {
  dataArr: Character[];
  hasError: boolean;
  isLoading: boolean;
  sorting: string;
  unsortedCards: Character[];
  info: Info | null;
  currentPage: number;
  cardsPerPage: number;
  allPages: number;
}

export interface MyStateForm {
  formCards: FormCard[];
  formValues: FormValues;
  initialForm: boolean;
}
