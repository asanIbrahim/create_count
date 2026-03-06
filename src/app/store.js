import counterReducers from '../features/counter/counterSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    counter: counterReducers,
  },
});

export default store;
