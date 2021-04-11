/** @format */

import React, { useState, useContext } from 'react';
import './Results.css';
import BarChart from '../charts/BarChart';
import Table from './Table';

export default function Header() {
	const [context] = useState('barchart');

	return (
		<header className='results'>
			<div className='content'>
				<div className='wrapper'>
					{context === 'table' ? (
						<div className='wrapper__item'>
							<Table />
						</div>
					) : (
						<div className='wrapper__item'>
							<BarChart />
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
