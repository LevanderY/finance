import { createSlice } from '@reduxjs/toolkit';

const initialTickersState = {
    tickersList: [],
    error: '',
};

export const tickersSlice = createSlice({
	name: 'tickers',
	initialState: initialTickersState,
	reducers: {
		tickersErrorAction: (state, action) => {
			state.error = action.payload;
		},
		getTickersAction: (state, action) => {
            state.tickersList = action.payload;
		},
	},
});

export const {
    tickersErrorAction,
    getTickersAction,
} = tickersSlice.actions;

export default tickersSlice.reducer;