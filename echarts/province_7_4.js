var province_7_4 = echarts.init(document.getElementById('province_7_4'));

	option_province_7_4 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        title:[{
            text: '得到过家庭无障碍改造人数'+province_series_data_7_4_sum,
            x : '10',
            y : '30',
            textStyle: {
                fontWeight: 'normal',              //标题颜色
                color: '#fff' ,
                fontSize:'14'
            }}] ,
        series: [
            {
                name:'人口占比',
                type:'pie',
                center:['400', '120'],
                radius: ['50%', '60%'],
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
                    {value:province_series_data_7_4[0], name:'有家庭无障碍改造需求人数'},
                    {value:province_series_data_7_4[1], name:'无需求人数'}
                ]
            }
        ]
	};

province_7_4.setOption(option_province_7_4);
