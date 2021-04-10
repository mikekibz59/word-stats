/** @format */

import React, { useContext } from 'react';
import axios from 'axios';
import './Form.css';
import StatsContext from '../app/StatsContext';

export default function Form() {
	const [ngram, setNgram] = useContext(StatsContext);
	const [body, setBody] = useContext(StatsContext);
	const [case_sensitive, setSensitivity] = useContext(StatsContext);
	const [length, setLength] = useContext(StatsContext);
	const submit = (e) => {
		e.preventDefault();
		let payload = { ngram, body, case_sensitive, length };
		axios
			.post('http://localhost:8000/api/stats/create_stats', payload)
			.then((res) => {
				console.log(res);
				console.log(res.data);
			});
	};

	return (
		<form className='stats_form'>
			<label htmlFor='ngam'> ngram</label> <br />
			<input
				name='ngram'
				value={ngram}
				onChange={(e) => setNgram(e.target.value)}
			/>
			<br />
			<label htmlFor='length'> length</label> <br />
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
			<label htmlFor='case sensitive'> case sensitive</label> <br />
			<input
				className='switch'
				type='checkbox'
				value={case_sensitive}
				onChange={(e) => setSensitivity((prev) => !prev)}
			/>
			<button type='submit' onClick={submit}>
				Send it!
			</button>
		</form>
	);
}
