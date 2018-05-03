var province_1_1 = echarts.init(document.getElementById('province_1_1'));

	option_province_1_1 = {
        // title: [
        //     {
        //         text:'全省等级人数  ' + province_1_1_sum[0],//  无障碍改造人数总和
        //         x: 10,
        //         y: 20,
        //         textStyle: {
        //             fontWeight: 'normal',              //标题颜色
        //             color: '#fff',
        //             fontSize: '14'
        //         }
        //     }
        // ],

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        series: [
            {
                name:'农业非农业占比',
                type:'pie',
                radius: ['40%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ff5b09','#1be3ff'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label:{
                            show: true,
                            formatter: '{b} : {d}%'
                        },
                        labelLine :{show:true}
                    }
                },
                data:[
                    {value:province_series_data_1_1[0], name:'农业'},
                    {value:province_series_data_1_1[1], name:'非农业'}
                ]
            }
        ]
	};
province_1_1.setOption(option_province_1_1);

