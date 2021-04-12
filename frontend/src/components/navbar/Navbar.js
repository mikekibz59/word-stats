/** @format */

import React, { useContext } from 'react';
import './Navbar.css';
import { StatsContext } from '../app/StatsContext';
import { isEmpty } from 'lodash';

const ResultLink = ({ result, setViewResult, viewResult }) => {
	if (isEmpty(result)) {
		return '';
	}
	if (viewResult) {
		return (
			<button
				className='result_link'
				onClick={() => {
					setViewResult(false);
				}}>
				{' '}
				Back
			</button>
		);
	}
	return (
		<button
			className='result_link'
			onClick={() => {
				setViewResult(true);
			}}>
			{' '}
			view results
		</button>
	);
};
export default function Navbar() {
	const { setViewResult, result, viewResult } = useContext(StatsContext);
	return (
		<nav className='nav' id='menu'>
			<div className='wrap'>
				<div className='brand'>
					<span onClick={() => setViewResult(false)}>Stats</span>
					<ResultLink
						result={result}
						setViewResult={setViewResult}
						viewResult={viewResult}
					/>
				</div>
			</div>
		</nav>
	);
}
