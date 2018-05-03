
var city_6_1_num=new Array();
var option_city_6_1_num=new Array();
for(var i=0;i<city_data_6_1[1].length;i++) {
    option_city_6_1_num[i] = {
        title: [
            {
                text: series_name[1][i],
                x: '0',
                y: '0',
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#fff',
                    fontSize: '14'
                }
            },
            {
                text: '社会救助情况',
                x: '50%',
                y: '47%',
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#fff',
                    fontSize: '14'
                }
            }
        ],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: [
            {
                data: ['享受低保人数'],
                x: '0',
                y: '50',
                textStyle: {
                    color: '#fff'
                }

            }, {
                data: ['享受特困供养人数'],
                x: '0',
                y: '95',
                textStyle: {
                    color: '#fff'
                }
            }, {
                data: ['享受医疗救助人数'],
                x: '0',
                y: '140',
                textStyle: {
                    color: '#fff'
                }
            }, {
                data: ['享受其他救助人数'],
                x: '0',
                y: '185',
                textStyle: {
                    color: '#fff'
                }
            }, {
                data: ['未享受'],
                x: '0',
                y: '230',
                textStyle: {
                    color: '#fff'
                }
            }
        ],

        series: [

            {
                name: '面积模式',
                type: 'pie',
                radius: [60, 90],
                center: ['60%', '50%'],
                roseType: 'radius',

                data: [
                    {value: city_data_6_1[1][i][0], name: '享受低保人数'},
                    {value: city_data_6_1[1][i][1], name: '享受特困供养人数'},
                    {value: city_data_6_1[1][i][2], name: '享受医疗救助人数'},
                    {value: city_data_6_1[1][i][3], name: '享受其他救助人数'},
                    {value: city_data_6_1[1][i][4], name: '未享受'},
                ],
                itemStyle: {
                    normal: {
                        //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ff5230', '#fee233', '#71ff30', '#26b0ff', '#ffffff'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            formatter: '{d}%'
                        },
                        labelLine: {show: true}
                    }
                }

            }
        ]
    };
}