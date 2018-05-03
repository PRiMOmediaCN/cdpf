var province_6_1 = echarts.init(document.getElementById('province_6_1'));
option_province_6_1 = {

    tooltip: {
        trigger: 'item',

    },
    calculable: true,
    grid: {
        left: 170, top: 20, width: '70%', height: '80%'
    },
    xAxis: [
        {
            type: 'value',
            show: false,

        }
    ],
    yAxis: [
        {
            type: 'category',
            show: true,
            data: ['居民医疗保险缴费补贴人数', '参加城乡居民医疗保险人数', '享受养老保险缴费补贴人数', '参加城乡居民养老保险人数'],
            axisTick: {
                alignWithLabel: true
            },
            splitLine: {
                show: false,
                //  改变轴线颜色
            },
            // x轴的颜色和宽度
            axisLine:{
                show: false,
            },// x轴的字体样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize:'12'
                },
                interval:0
            },
        }
    ],
    series: [
        {
            name: '社保保险人数',
            type: 'bar',
            barWidth : 10,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#1bc2dc','#ff5b09','#1bc2dc','#ff5b09'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'insideRight',
                        formatter: '{c}',
                        fontSize:'9'
                    }
                },


            },

            data: province_series_data_6_1,

        }
    ]
};


province_6_1.setOption(option_province_6_1);
