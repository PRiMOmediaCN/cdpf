var city_7_3_num=new Array();
var option_city_7_3_num=new Array();
for(var i=0;i<city_data_7_3[1].length;i++) {
    option_city_7_3_num[i] = {
        title:
            {
                text: series_name[1][i] + '   得到过家庭无障碍改造人数 ' + city_7_3_sum[i],//  无障碍改造人数总和
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
                data: ['享受托养服务人数'],
                x: '10',
                y: '60',
                textStyle: {
                    color: '#fff'
                }

            }, {
                data: ['未享受'],
                x: '10',
                y: '110',
                textStyle: {
                    color: '#fff'
                }
            }

        ],
        series: [
            {
                name: '托养服务人数',
                type: 'pie',
                radius: ['50%', '60%'],
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
                            formatter: '{b} : {d}%'
                        },
                        labelLine: {show: true}
                    }
                },
                data: [
                    {value: city_data_7_3[1][i][0], name: '有家庭无障碍改造需求人数'},
                    {value: city_data_7_3[1][i][1], name: '无需求人数'},
                ]
            }
        ]
    };

}
