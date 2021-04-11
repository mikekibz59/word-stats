/** @format */

import React, { useContext } from 'react';
import { StatsContext } from '../app/StatsContext';
import './Table.css';

export default function Table() {
	const { result } = useContext(StatsContext);
	return (
		<table className='styled-table'>
			<thead>
				<tr>
					<th>NGRAM</th>
					<th>Count</th>
				</tr>
			</thead>
			<tbody>
				{console.log('Table', result)}
				{Object.keys(result).map((key) => {
					return (
						<tr>
							<td>{key}</td>
							<td>{result[key]}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
