import { configureStore } from '@reduxjs/toolkit';
import tickersSlice from './tickers/tickersSlice';

export const store = configureStore({
	reducer: {
		tickers: tickersSlice
	},
});