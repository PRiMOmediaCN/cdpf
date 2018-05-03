var province_6_3 = echarts.init(document.getElementById('province_6_3'));

	option_province_6_3 = {
        title:[
            {
                text: '养老保险参保率',
                x: 20,
                y: 10,
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#fff' ,
                    fontSize:'12'
                }
            },
            {
                text: '养老保险获补贴比例',
                x: 170,
                y: 10,
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#fff' ,
                    fontSize:'12'
                }
            },{
                text: '医疗保险参保率',
                x: 340,
                y: 10,
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#fff' ,
                    fontSize:'12'
                }
            },{
                text: '医疗保险获补贴比例',
                x: 490,
                y: 10,
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#fff' ,
                    fontSize:'12'
                }
            }

        ] ,
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'养老保险参保率',
                type:'pie',
                center: [70, 100],
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
                    },
                },

                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'bold'
                        },
                        formatter:'{d}%'

                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:province_series_data_6_3[0][0], name:'养老保险参保人数'},
                    {value:province_series_data_6_3[0][1], name:'养老保险参保人数'}
                ]
            },
            {
                name:'养老保险获补贴比例',
                type:'pie',
                center: [230, 100],
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
                    },
                },

                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'bold'
                        },
                        formatter:'{d}%'

                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:province_series_data_6_3[1][0], name:'养老保险获补贴人数'},
                    {value:province_series_data_6_3[1][1], name:'养老保险未获补贴人数'}
                ]
            },
            {
                name:'医疗保险参保率',
                type:'pie',
                center: [390, 100],
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
                    },
                },

                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'bold'
                        },
                        formatter:'{d}%'

                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:province_series_data_6_3[2][0], name:'医疗保险参保人数'},
                    {value:province_series_data_6_3[2][1], name:'医疗保险未参保人数'}
                ]
            },
            {
                name:'医疗保险获补贴比例',
                type:'pie',
                center: [550, 100],
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
                    },
                },

                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'bold'
                        },
                        formatter:'{d}%'

                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:province_series_data_6_3[3][0], name:'医疗保险获补贴人数'},
                    {value:province_series_data_6_3[3][1], name:'医疗保险未获补贴人数'}
                ]
            }
        ]
	};

province_6_3.setOption(option_province_6_3);
