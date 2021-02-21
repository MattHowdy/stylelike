import React from 'react'
import ReactECharts from 'echarts-for-react';

export default function LineChart(props) {
    return (
        <ReactECharts
        style={{ height: '200px'}}
        option={{
          xAxis: {
            type: 'category',
            data:  props.xData
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: props.yData,
            type: 'line',
            color: 'red'
          }]
        }}
      />
    )
}
