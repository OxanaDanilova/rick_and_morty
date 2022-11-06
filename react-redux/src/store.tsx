import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';
import formReducer from './formSlice';

const store = configureStore({
  reducer: { cards: cardsReducer, form: formReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.avatar'],
        // Ignore these paths in the state
        ignoredPaths: ['form.formValues.avatar'],
      },
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
