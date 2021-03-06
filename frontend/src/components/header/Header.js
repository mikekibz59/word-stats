/** @format */

import React from 'react';
import Form from '../form/Form';
import './Header.css';

export default function Header() {
	return (
		<header className='hero'>
			<div className='content'>
				<div className='wrapper'>
					<div className='wrapper__item'>
						<h1>WordStats calculator</h1>
						<p>
							Get specialized statistics on the text that <br />
							you type exactly the same way a machine understands
						</p>
					</div>
					<div className='wrapper__item'>
						<Form />
					</div>
				</div>
			</div>
		</header>
	);
}
