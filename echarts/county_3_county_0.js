var county_3_county_num =new Array();
var option_county_3_county_num =new Array();
for(var i=0;i<county_series_data_3_2.length;i++) {
    option_county_3_county_num[i] = {
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

            show: true,
            type: 'category',
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
                    fontSize: '12'
                },
                interval: 0
            },
        },
        yAxis: {
            show: false,
            type: 'value',

            max: county_series_data_3_2_max[0],
        },
        series: [
            {
                name: '公租房',
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
                data: county_series_data_3_2[i][0]
            },
            {
                name: '廉租房',
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
                data: county_series_data_3_2[i][1]
            }
            ,
            {
                name: '租赁补贴',
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
                data: county_series_data_3_2[i][2]
            }
        ]
    };

}