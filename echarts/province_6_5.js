var province_6_5 = echarts.init(document.getElementById('province_6_5'));
option_province_6_5 = {

    tooltip: {
        trigger: 'item',

    },
    calculable: true,
    grid: {
        left: 110, top: 00, width: '70%', height: '90%'
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
            data: ['低保', '特困供养', '困难残疾人生活补贴', '重度残疾人护理补贴', '医疗救助', '燃油补贴'],
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
            barWidth : 20,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#ff5b09'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'insideRight',
                        formatter: '{c}'
                    }
                },


            },


            data: province_series_data_6_5,

        }
    ]
};


province_6_5.setOption(option_province_6_5);
