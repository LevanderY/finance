import {
    tickersErrorAction,
    getTickersAction
} from './tickersSlice';

export const getTickers = (data) => (dispatch) => {
	dispatch(getTickersAction(data));
	try {
	} catch (e) {
		dispatch(tickersErrorAction(e));
	}
};