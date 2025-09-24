import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './apis/auth';
import { portfolioApi } from './apis/portfolio';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, portfolioApi.middleware),
});