/** @format */

import React, { useState, useContext } from 'react';
import './Results.css';
import BarChart from '../charts/BarChart';
import Table from './Table';

const Switcher = ({ setContext, context }) => {
	return (
		<div className='tab_switcher__content'>
			<span
				className={context === 'barchart' ? 'active' : ''}
				onClick={() => setContext('barchart')}>
				Barchart
			</span>
			{' | '}
			<span
				className={context === 'table' ? 'active' : ''}
				onClick={() => setContext('table')}>
				table
			</span>
		</div>
	);
};

export default function Header() {
	const [context, setContext] = useState('barchart');

	return (
		<header className='results'>
			<div className='results__content'>
				<span className='tab_switcher'>
					<h2>Results</h2>
					<Switcher setContext={setContext} context={context} />
				</span>
				<div className='results__wrapper'>
					{context === 'table' ? (
						<div className='results__wrapper__item'>
							<Table />
						</div>
					) : (
						<div className='results__wrapper__item'>
							<BarChart />
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
