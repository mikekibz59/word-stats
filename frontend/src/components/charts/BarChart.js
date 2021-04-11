/** @format */

import BarChartConfig from './BarChartConfg';
import React, { useContext } from 'react';
import ReactHighCharts from 'react-highcharts';
import { StatsContext } from '../app/StatsContext';

export default function () {
	const { result } = useContext(StatsContext);
	return (
		<div>
			<ReactHighCharts config={BarChartConfig(result)} />
		</div>
	);
}
