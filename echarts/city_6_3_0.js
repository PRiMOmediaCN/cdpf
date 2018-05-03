var city_6_3_num=new Array();
var option_city_6_3_num=new Array();
for(var i=0;i<city_data_6_3[1].length;i++) {
    option_city_6_3_num[i] = {
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
            data:series_name[1][i],
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
            max: city_series_data_6_3_max[0],

        },
        series: [
            {
                name: '享受困难残疾人生活补贴人数',
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
                data: city_data_6_3[1][i][0]
            },
            {
                name: '享受重度残疾人生活补贴人数',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#fee233'
                            ];
                            return colorList[params.dataIndex]
                        },
                    }
                },
                data: city_data_6_3[1][i][1]
            }
        ]
    };
}


