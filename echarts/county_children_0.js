var county_children_num=new Array();
var option_county_children_num=new Array();
console.log(Math.ceil(county_series_data_1_2.length/2));
for(var i=0;i<Math.ceil(county_series_data_1_2.length/2);i++) {
    option_county_children_num[i] = {

        tooltip: {
            trigger: 'item',

        },
        calculable: true,
        grid: {
            left: 85, top: '10%', width: '55%', height: '80%'
        },
        xAxis: [
            {
                type: 'value',
                show: false,
                max: county_series_data_1_2_max[0],
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
                axisLine: {
                    show: false,
                },// x轴的字体样式
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: '9'
                    },
                    interval: 0
                },
            }
        ],
        series: [
            {
                name: county_series_name[i],
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: function (params) {
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


                data: county_series_data_1_2[i],

            }
        ]
    };

}
