/** @format */

import BarChartConfig from './BarChartConfg';
import React from 'react';
import ReactHighCharts from 'react-highcharts';

export default function () {
	return (
		<div>
			<ReactHighCharts config={BarChartConfig()} />
		</div>
	);
}
