import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import contentReducer from '../features/myweb/contentSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    contentReducer,
  },
});
