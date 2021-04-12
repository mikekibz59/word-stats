/** @format */

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import './App.css';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import Results from '../results/Results';
import { StatsContext } from './StatsContext.js';
import { isEmpty } from 'lodash';

const Content = ({ viewResult, result }) => {
	if (isEmpty(result)) {
		return <Header />;
	}
	if (viewResult) {
		return <Results />;
	}
	return <Header />;
};
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
		setViewResult,
	};
	return (
		<div className='App'>
			<StatsContext.Provider value={state}>
				<Navbar />
				<Content result={result} viewResult={viewResult} />
				<ToastContainer />
			</StatsContext.Provider>
		</div>
	);
}

export default App;
