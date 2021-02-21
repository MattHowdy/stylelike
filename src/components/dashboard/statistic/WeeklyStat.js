import React from 'react'
import LineChart from '../../charts/LineChart';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const series = Array(days.length).fill().map(() => Math.round(Math.random() * 100))

export default function WeeklyStat() {
    return (
        <div >
            <LineChart xData={days} yData={series} />
      </div>
    )
}
