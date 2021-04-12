/** @format */

import BarChartConfig from './BarChartConfg';
import { Theme } from './BarChartTheme';
import React, { useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { StatsContext } from '../app/StatsContext';
import './Chart.css';

Highcharts.setOptions(Theme);
export default function () {
	const { result } = useContext(StatsContext);
	return (
		<div className='chart-div'>
			<HighchartsReact
				highcharts={Highcharts}
				options={BarChartConfig(result)}
			/>
		</div>
	);
}
