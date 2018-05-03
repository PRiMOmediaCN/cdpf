var province_2_4 = echarts.init(document.getElementById('province_2_4'));

	option_province_2_4 = {
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
                                '#fee233','#1be3ff'
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
                    {value:province_series_data_2_4[0], name:'低于低收入标准或低保边缘标准'},
                    {value:province_series_data_2_4[1], name:'其他人'}
                ]
            }
        ]
	};

province_2_4.setOption(option_province_2_4);
