/** @format */

import React, { useContext } from 'react';
import './Navbar.css';
import { StatsContext } from '../app/StatsContext';

export default function Navbar({ setViewResult }) {
	const { result } = useContext(StatsContext);
	return (
		<nav className='nav' id='menu'>
			<div className='wrap'>
				<div className='brand'>
					<span>Stats</span>
				</div>
				<div className='action_btn'>
					{Object.keys(result) === 0 ? (
						<button
							onClick={() => {
								setViewResult((prevView) => !prevView);
							}}>
							{' '}
							View results
						</button>
					) : (
						''
					)}
				</div>
			</div>
		</nav>
	);
}
