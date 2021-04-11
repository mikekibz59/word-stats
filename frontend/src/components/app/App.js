/** @format */

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import Results from '../results/Results';
import { StatsContext } from './StatsContext.js';

const getResult = () => {
	let result = JSON.parse(localStorage.getItem('results'));
	return result;
};
function App() {
	const [ngram, setNgram] = useState(1);
	const [body, setBody] = useState('');
	const [case_sensitive, setSensitivity] = useState(false);
	const [length, setLength] = useState(100);
	const [result, setResult] = useState({});
	const [viewResult, setViewResult] = useState(false);

	const state = {
		ngram,
		setNgram,
		body,
		setBody,
		case_sensitive,
		setSensitivity,
		length,
		setLength,
		result,
		setResult,
	};
	return (
		<Router>
			<div className='App'>
				<StatsContext.Provider value={state}>
					<Navbar setViewResult={setViewResult} />
					{console.log(result)}
					{Object.keys(result).length === 0 && !viewResult ? (
						<Header />
					) : (
						<Results />
					)}
				</StatsContext.Provider>
			</div>
		</Router>
	);
}

export default App;
