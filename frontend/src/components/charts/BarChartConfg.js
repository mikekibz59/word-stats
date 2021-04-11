/** @format */

function propSeries(prop) {
	let series = [];
	for (let obj in prop) {
		series.push({ name: obj, data: [prop[obj]] });
	}
	return series;
}

export default function (prop) {

	return {
		chart: {
			type: 'column',
		},
		title: {
			text: 'N-GRAM',
		},
		subtitle: {
			text: 'Source: WordStat',
		},
		xAxis: {
			categories: Object.keys(prop),
			crosshair: true,
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Count',
			},
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
			},
		},
		series: propSeries(prop),
	};
}
