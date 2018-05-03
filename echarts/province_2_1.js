var province_2_1 = echarts.init(document.getElementById('province_2_1'));

	option_province_2_1 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        series: [
            {
                name:'人口占比',
                type:'pie',
                radius: ['30%', '40%'],
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
                    {value:province_series_data_2_1[0], name:'困难人口'},
                    {value:province_series_data_2_1[1], name:'非困难人口'}
                ]
            }
        ]
	};

province_2_1.setOption(option_province_2_1);
