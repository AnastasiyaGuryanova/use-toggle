import { useReducer } from 'react';

export const useToggle = (values = [true, false]) => {
	const reducer = (state, action) => {
		if (values.includes(action)) {
			return action;
		}

		const currentIndex = values.indexOf(state);
		const nextIndex = (currentIndex + 1) % values.length;

		return values[nextIndex];
	};

	const [value, dispatch] = useReducer(reducer, values[0]);

	return [value, dispatch];
};
