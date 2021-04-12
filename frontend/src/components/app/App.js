/** @format */

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import './App.css';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import Results from '../results/Results';
import { StatsContext } from './StatsContext.js';

function App() {
	const [ngram, setNgram] = useState(1);
	const [body, setBody] = useState('');
	const [case_sensitive, setSensitivity] = useState(true);
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
		viewResult,
		setViewResult
	};
	return (
		<div className='App'>
			<StatsContext.Provider value={state}>
				<Navbar />
				{Object.keys(result).length === 0 && !viewResult ? (
					<Header />
				) : (
					<Results />
				)}
				<ToastContainer />
			</StatsContext.Provider>
		</div>
	);
}

export default App;
