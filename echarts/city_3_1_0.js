var city_3_1_num=new Array();
var option_city_3_1_num=new Array();
for(var i=0;i<city_data_3_1[1].length;i++) {
    option_city_3_1_num[i] = {
        title:
            {
                text: series_name[1][i],
                x: 10,
                y: 40,
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#fff',
                    fontSize: '14'
                }
            }
        ,
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [
            {
                data: ['自有产权住房'],
                x: '10',
                y: '80',
                textStyle: {
                    color: '#fff'
                }

            }, {
                data: ['享受住房保障'],
                x: '10',
                y: '130',
                textStyle: {
                    color: '#fff'
                }
            }

        ],
        series: [
            {
                name: '各市城镇残疾人家庭住房',
                type: 'pie',
                center: [290, 100],
                radius: ['40%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ff5b09', '#1bc2dc'
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
                    {value: city_data_3_1[1][i][0], name: '自有产权住房'},
                    {value: city_data_3_1[1][i][1], name: '享受住房保障'}
                ]
            }
        ]
    };

}
