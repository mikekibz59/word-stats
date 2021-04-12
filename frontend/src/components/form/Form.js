/** @format */

import React, { useContext, useState } from 'react';
import axios from 'axios';
import './Form.css';
import { StatsContext } from '../app/StatsContext';
import { toast } from 'react-toastify';

const _postRequest = (payload) => {
	return axios.post('http://localhost:8000/api/stats/create_stats', payload);
};

const ErrorResponse = ({ error }) => {
	return (
		<ul className='error'>
			<li>{error}</li>
		</ul>
	);
};
export default function Form() {
	const [error, setError] = useState(null);
	const {
		ngram,
		setNgram,
		body,
		setBody,
		case_sensitive,
		setSensitivity,
		length,
		setLength,
		setResult,
	} = useContext(StatsContext);

	const submit = async (e) => {
		e.preventDefault();
		try {
			let payload = { ngram, body, case_sensitive, length };
			const res = await _postRequest(payload);
			setResult(res.data);
			setError(null);
			toast.success('results calucated successfuly');
		} catch (error) {
			let error_msg = error.response.data.message;
			setError(error_msg);
			toast.error('something went wrong');
		}
	};

	return (
		<form className='stats_form'>
			{error ? <ErrorResponse error={error} /> : ''}
			<h2> Calculator</h2>
			<div className='stats_form__field'>
				<label htmlFor='ngam'> NRAM</label>
				<input
					name='ngram'
					value={ngram}
					onChange={(e) => setNgram(e.target.value)}
				/>
			</div>

			<div className='stats_form__field'>
				<label htmlFor='length'> Length</label>
				<input
					name='length'
					value={length}
					onChange={(e) => setLength(e.target.value)}
				/>
			</div>

			<div className='stats_form__field'>
				<label htmlFor='body'>Text </label>
				<textarea
					name='body'
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>{' '}
			</div>

			<div className='stats_form__field'>
				<label htmlFor='case sensitive'> case sensitive</label>
				<input
					id='stats_form__field__checkbox'
					type='checkbox'
					checked={case_sensitive}
					value={case_sensitive}
					onChange={(e) => setSensitivity((prev) => !prev)}
				/>
			</div>
			<button type='submit' onClick={submit}>
				Calculate
			</button>
		</form>
	);
}
