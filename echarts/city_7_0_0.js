var city_7_0_num=new Array();
var option_city_7_0_num=new Array();
for(var i=0;i<city_data_7_0[1].length;i++) {
    option_city_7_0_num[i] = {
        title:
            {
                text: series_name[1][i],
                x: 10,
                y: 70,
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
                data: ['享受托养服务人数'],
                x: '10',
                y: '110',
                textStyle: {
                    color: '#fff'
                }

            }, {
                data: ['未享受'],
                x: '10',
                y: '160',
                textStyle: {
                    color: '#fff'
                }
            }

        ],
        series: [
            {
                name: '托养服务人数',
                type: 'pie',
                center: [250, 110],
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
                    {value: city_data_7_0[1][i][0], name: '享受托养服务人数'},
                    {value: city_data_7_0[1][i][1], name: '未享受'},
                ]
            }
        ]
    };

}
