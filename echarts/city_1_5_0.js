var city_1_5_num=new Array();
var option_city_1_5_num=new Array();

for(var i=0;i<city_data_1_5[1].length;i++) {
    option_city_1_5_num[i] = {
        title: [
            {
                text: series_name[1][i],
                x: 10,
                y: 140,
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#fff',
                    fontSize: '14'
                }
            }
        ],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [
            {
                data: ['女性'],
                x: '10',
                y: '180',
                textStyle: {
                    color: '#fff'
                }

            }, {
                data: ['男性'],
                x: '10',
                y: '230',
                textStyle: {
                    color: '#fff'
                }
            }

        ],
        series: [
            {
                name: '男女残疾人数量占比',
                type: 'pie',
                center: [290, 140],
                radius: ['40%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ff5b09', '#fee233'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            formatter: '{d}%'
                        },
                        labelLine: {show: true}
                    }
                },
                data: [
                    {value: city_data_1_5[1][i][0], name: '女性'},
                    {value: city_data_1_5[1][i][1], name: '男性'}
                ]
            }
        ]
    };

}