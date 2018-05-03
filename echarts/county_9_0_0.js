var county_9_0_num =new Array();
var option_county_9_0_num =new Array();
for(var i=0;i<county_series_data_9_0.length;i++){
    option_county_9_0_num[i] = {

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}"
        },
        calculable: true,
        grid: {
            left: 70, top: '10%', width: '55%', height: '80%'
        },
        xAxis: [
            {
                type: 'value',
                show: false,
                max:county_series_data_9_0_max[0]//Y轴最大值
            }
        ],
        yAxis: [
            {
                type: 'category',

                show: true,
                data: county_series_name[i],
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
                name: county_series_name[i],
                type: 'bar',
                barWidth : 10,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#1be3ff'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'right',
                            formatter: '{c}'
                        }
                    },


                },


                data: county_series_data_9_0[i],

            }
        ]
    };
}


