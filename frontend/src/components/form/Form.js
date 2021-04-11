/** @format */

import React, { useContext } from 'react';
import axios from 'axios';
import './Form.css';
import { StatsContext } from '../app/StatsContext';

export default function Form() {
	const {
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
	} = useContext(StatsContext);

	const submit = async (e) => {
    e.preventDefault();
		try {
			let payload = { ngram, body, case_sensitive, length };
			const res = await axios.post(
				'http://localhost:8000/api/stats/create_stats',
				payload
			);
			setResult(res.data);
			// localStorage.setItem('results', JSON.stringify(result));
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<form className='stats_form'>
			<h2> Calculator</h2>
			<label htmlFor='ngam'> NRAM</label> <br />
			<input
				name='ngram'
				value={ngram}
				onChange={(e) => setNgram(e.target.value)}
			/>
			<br />
			<label htmlFor='length'> Length</label> <br />
			<input
				name='length'
				value={length}
				onChange={(e) => setLength(e.target.value)}
			/>
			<br />
			<label htmlFor='body'>Text</label>
			<textarea
				name='body'
				value={body}
				onChange={(e) => setBody(e.target.value)}
			/>{' '}
			<br />
			<div className='case'>
				<label htmlFor='case sensitive'> case sensitive</label> <br />
				<input
					type='checkbox'
					value={case_sensitive}
					onChange={(e) => setSensitivity((prev) => !prev)}
				/>
			</div>
			<button type='submit' onClick={submit}>
				Send it!
			</button>
		</form>
	);
}
