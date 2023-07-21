import ReactECharts from 'echarts-for-react';
import React, { useState } from 'react'
import { fftSize } from './FFTGraph';
import * as echarts from 'echarts/core';

const lerp = (x: number, y: number, a:number,) => x * (1 - a) + y * a;

const option = (data: number[]) => ({
    animation: false,
    title: {
        left: 'center',
        text: 'Intensity over frequency (linear scale)',
        textStyle: {
            color: 'white'
        }
    },
    xAxis: {
        type: 'category',
        snap: false,
        data: Array.from(data.map((_, i) => lerp(0,20000,i/(fftSize-100)))),
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [
        {
            data: data,
            showSymbol: false,
            type: 'line',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255,0,0)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(0, 0,255)'
                    }
                ])
            },
            lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255,0,0)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(0, 0,255)'
                    }
                ])
            },
        }
    ]
});


type FFTChartProps = {
    data: Float32Array
}

const FFTChart = ({ data }: FFTChartProps) => {
    let chartData = (data) ? Array.from(data) : [];
    return (
        <ReactECharts style={{ height: "60vh" }} option={option(chartData)} notMerge={true} />
    )
}

export {lerp};
export default FFTChart;