import { useToggle } from './hooks';
import './App.css';

export const App = () => {
	const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
	console.log(value);

	return (
		<div>
			<button onClick={() => toggle()}>{value}</button>
		</div>
	);
};
