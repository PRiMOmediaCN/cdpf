var city_3_0_num=new Array();
var option_city_3_0_num=new Array();
for(var i=0;i<city_data_3_0[1].length;i++) {
    option_city_3_0_num[i] = {
        title:
            {
                text: series_name[1][i],
                x: 10,
                y: 20,
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
                data: ['状况良好'],
                x: '10',
                y: '60',
                textStyle: {
                    color: '#fff'
                }

            }, {
                data: ['经鉴定为危房'],
                x: '10',
                y: '110',
                textStyle: {
                    color: '#fff'
                }
            }, {
                data: ['其它'],
                x: '10',
                y: '160',
                textStyle: {
                    color: '#fff'
                }
            }

        ],
        series: [
            {
                name: '各市农村残疾人家庭住房',
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
                                '#ff5b09', '#1bc2dc', '#ffffff'
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
                    {value: city_data_3_0[1][i][0], name: '状况良好'},
                    {value: city_data_3_0[1][i][1], name: '经鉴定为危房'},
                    {value: city_data_3_0[1][i][2], name: '其它'}
                ]
            }
        ]
    };
}

