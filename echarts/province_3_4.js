var province_3_4 = echarts.init(document.getElementById('province_3_4'));

	option_province_3_4 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        series: [
            {
                name:'甘肃省城镇住房需求占比',
                type:'pie',
                radius: ['50%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ff5b09','#1be3ff','#ffffff'
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
                    {value:province_series_data_3_4[0], name:'公租房'},
                    {value:province_series_data_3_4[1], name:'廉租房'},
                    {value:province_series_data_3_4[2], name:'租赁补助'}
                ]
            }
        ]
	};

province_3_4.setOption(option_province_3_4);
