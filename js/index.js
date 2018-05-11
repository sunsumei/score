// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
option = {
    title: {
        text: '评分雷达图'
    },
    tooltip: {},
    // legend: {
    //     data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    // },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '领导力', max: 10},
           { name: '工作积极性', max: 10},
           { name: '洞察力', max: 10},
           { name: '责任心', max: 10},
           { name: '互动力', max: 10},
           { name: '理解力', max: 10}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
             {
                value : [5, 6, 8, 6, 7, 7],
                name : '党员1'
            }
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);