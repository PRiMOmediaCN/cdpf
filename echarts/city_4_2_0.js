var city_4_2_num=new Array();
var option_city_4_2_num=new Array();
for(var i=0;i<city_data_4_2[1].length;i++) {
    option_city_4_2_num[i] = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            position:function(p){   //其中p为当前鼠标的位置
                return [p[0] - 50, p[1]];
            }
        },
        grid: {
            left: '10%', top: 0, width: '80%', height: '80%'
        },

        xAxis: {
            data: series_name[1][i],
            show: true,
            type: 'category',

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
                    fontSize: '12'
                },
                interval: 0
            },
        },
        yAxis: {
            show: false,
            type: 'value',
            max:city_series_data_4_2_max[0],

        },
        series: [
            {
                name: '随班就读',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#17bed8'
                            ];
                            return colorList[params.dataIndex]
                        },
                    }
                },
                data: city_data_4_2[1][i][0]
            },
            {
                name: '特教班',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#d44d0c'
                            ];
                            return colorList[params.dataIndex]
                        },
                    }
                },
                data: city_data_4_2[1][i][1]
            }
            ,
            {
                name: '送教上门',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ffffff'
                            ];
                            return colorList[params.dataIndex]
                        },
                    }
                },
                data: city_data_4_2[1][i][2]
            }
        ]
    };

}

