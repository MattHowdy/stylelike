import React from 'react'
import LineChart from '../../charts/LineChart';

const daysInMonth=31
const getDays = () => Array.from(Array(daysInMonth).keys())
const getSeries = () => Array(daysInMonth).fill().map(() => Math.round(Math.random() * daysInMonth))

export default function MonthlyStat() {
    return (
        <div>
            <LineChart xData={getDays()} yData={getSeries()} />
        </div>
    )
}
