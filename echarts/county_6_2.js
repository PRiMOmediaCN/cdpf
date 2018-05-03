var county_6_2 = echarts.init(document.getElementById('county_6_2'));

	option_county_6_2 = {
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
                    {value:county_series_data_6_2[0][0], name:'养老保险参保人数'},
                    {value:county_series_data_6_2[0][1], name:'养老保险参保人数'}
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
                    {value:county_series_data_6_2[0][2], name:'养老保险获补贴人数'},
                    {value:county_series_data_6_2[0][3], name:'养老保险未获补贴人数'}
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
                    {value:county_series_data_6_2[0][4], name:'医疗保险参保人数'},
                    {value:county_series_data_6_2[0][5], name:'医疗保险未参保人数'}
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
                    {value:county_series_data_6_2[0][6], name:'医疗保险获补贴人数'},
                    {value:county_series_data_6_2[0][7], name:'医疗保险未获补贴人数'}
                ]
            }
        ]
	};

county_6_2.setOption(option_county_6_2);
