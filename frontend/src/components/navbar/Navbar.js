/** @format */

import React, { useContext } from 'react';
import './Navbar.css';
import { StatsContext } from '../app/StatsContext';
import { isEmpty } from 'lodash';

const ChangeView = ({ result, viewResult, setViewResult }) => {
	const result_ = isEmpty(result);
	console.log('result', result_);
	console.log('viewresult', viewResult)
	if (!result_ || !viewResult) {
		return (
			<div
				className='action_btn'
				onClick={() => {
					setViewResult(true);
				}}>
				view results
			</div>
		);
	} else if (!result_ && viewResult) {
		return (
			<div
				className='action_btn'
				onClick={() => {
					setViewResult(false);
				}}>
				back
			</div>
		);
	}
	else{
		return ''
	}
};
export default function Navbar() {
	const { result, viewResult, setViewResult } = useContext(StatsContext);
	console.log(result);
	return (
		<nav className='nav' id='menu'>
			<div className='wrap'>
				<div className='brand'>
					<span>Stats</span>
					<ChangeView
						result={result}
						viewResult={viewResult}
						setViewResult={setViewResult}
					/>
				</div>
			</div>
		</nav>
	);
}
