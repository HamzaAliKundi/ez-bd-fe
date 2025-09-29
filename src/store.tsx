import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './apis/auth';
import { portfolioApi } from './apis/portfolio';
import { instructionsApi } from './apis/instructions';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
    [instructionsApi.reducerPath]: instructionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, portfolioApi.middleware, instructionsApi.middleware),
});