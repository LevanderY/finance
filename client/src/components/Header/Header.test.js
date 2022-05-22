import React from 'react';
import Header from '../Header/Header';
import { customTestRender } from '../../utils/customTestRender';
import '@testing-library/jest-dom/extend-expect';

describe('Header component', () => {
	it('Should render my name', () => {
		const { getByTestId } = customTestRender(<Header />, {});
		const name = getByTestId('myName');

		expect(name).toHaveTextContent('Yurii Leshyshyn');
	});
});
