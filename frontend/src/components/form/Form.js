/** @format */

import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

export default function Form() {
	const [ngram, setNgram] = useState(1);
	const [body, setBody] = useState('');
	const [case_sensitive, setSensitivity] = useState(false);
	const [length, setLength] = useState(100);
	const submit = (e) => {
		e.preventDefault();
		let payload = { ngram, body, case_sensitive, length };
		console.log(payload);
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
