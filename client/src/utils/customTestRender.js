import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tickersSlice from '../store/tickers/tickersSlice';
import '@testing-library/jest-dom/extend-expect';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};


export const customTestRender = (
	content,
	{
		preloadedState,
		store = configureStore({
			preloadedState,
            reducer: {
                tickers: tickersSlice
            },
		}),
		...renderOptions
	} = {}
) => {
	const CustomWrapper = ({ children }) => {
		return (
			<MemoryRouter>
				<Provider store={store}>{children}</Provider>
			</MemoryRouter>
		);
	};
	return render(content, { wrapper: CustomWrapper, ...renderOptions });
};

export * from '@testing-library/react';