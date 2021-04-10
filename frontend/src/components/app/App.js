/** @format */

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import StatsContext from './StatsContext.js';
function App() {
	const [ngram, setNgram] = useState(1);
	const [body, setBody] = useState('');
	const [case_sensitive, setSensitivity] = useState(false);
	const [length, setLength] = useState(100);
	const state = {
		ngram,
		setNgram,
		body,
		setBody,
		case_sensitive,
		setSensitivity,
		length,
		setLength,
	};
	return (
		<Router>
			<div className='App'>
				<StatsContext.Provider value={state}>
					<Navbar />
					<Header />
				</StatsContext.Provider>
			</div>
		</Router>
	);
}

export default App;
