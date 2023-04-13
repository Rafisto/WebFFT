import ReactECharts from 'echarts-for-react';
import React, { useState } from 'react'
import { fftSize } from './FFTGraph';
import * as echarts from 'echarts/core';

const option = (data: number[]) => ({
    animation: false,
    title: {
        left: 'center',
        text: 'Intensity over Samples (roughly)',
        textStyle: {
            color: 'white'
        }
    },
    xAxis: {
        type: 'category',
        snap: false,
        max: 500,
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

export default FFTChart