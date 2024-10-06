import React from "react";
import {StyleSheet, Text, View} from "react-native";
import ClassBox from "./classBox";
import Table from "./table";
import Course from "./course";

const weekTime = ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'];

const weekdayCNName = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
const weekdayENName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const classData = [
    [
        {
            name: "网络安全协议分析",
            teacher: "周维副教授",
            classroom: "北山二阶梯",
            weeks: "2-6,8-14",
            periodStart: 3,
            periodDuration: 2,
        },
        {
            name: "算法设计与分析",
            teacher: "李艳春副教授",
            classroom: "计算中心B202",
            weeks: "2-4,8-11",
            periodStart: 5,
            periodDuration: 2,
        },
        {
            name: "马克思主义基本原理",
            teacher: "宋婧讲师（高校）",
            classroom: "逸夫楼-410",
            weeks: "2-3,5-6,8-11",
            periodStart: 7,
            periodDuration: 2,
        },
    ],
    [
        {
            name: "算法设计与分析",
            teacher: "李艳春副教授",
            classroom: "计算中心B202",
            weeks: "2-5,7-10",
            periodStart: 1,
            periodDuration: 2,
        },
        {
            name: "网络安全协议分析",
            teacher: "周维副教授",
            classroom: "北山二阶梯",
            weeks: "2-5,7-14",
            periodStart: 3,
            periodDuration: 2,
        },
        {
            name: "量子计算",
            teacher: "李琴教授",
            classroom: "兴教楼C203",
            weeks: "2-5,7-10",
            periodStart: 5,
            periodDuration: 2,
        },
    ],
    [
        {
            name: "区块链技术",
            teacher: "姜新文,朱哲实验师",
            classroom: "计算中心B301",
            weeks: "2-5,7-8",
            periodStart: 1,
            periodDuration: 2,
        },
        {
            name: "区块链技术",
            teacher: "姜新文,朱哲实验师",
            classroom: "计算中心B301",
            weeks: "9-10",
            periodStart: 1,
            periodDuration: 2,
        },
        {
            name: "云计算安全",
            teacher: "余浩",
            classroom: "兴教楼C203",
            weeks: "11-16",
            periodStart: 3,
            periodDuration: 2,
        },
        {
            name: "网络空间安全法律法规",
            teacher: "易磊讲师（高校）",
            classroom: "兴湘学院三教-103",
            weeks: "2-5,7-10",
            periodStart: 9,
            periodDuration: 2,
        },
    ],
    [
        {
            name: "Linux系统分析与安全",
            teacher: "叶松涛副教授",
            classroom: "兴教楼C204",
            weeks: "2-5,7-10",
            periodStart: 1,
            periodDuration: 2,
        },
        {
            name: "量子计算",
            teacher: "李琴教授",
            classroom: "兴教楼C203",
            weeks: "2-5,7-10",
            periodStart: 3,
            periodDuration: 2,
        },
        {
            name: "马克思主义基本原理",
            teacher: "宋婧讲师（高校）",
            classroom: "逸夫楼-410",
            weeks: "2-3,5-6,8-11",
            periodStart: 5,
            periodDuration: 2,
        },
        {
            name: "网络空间安全法律法规",
            teacher: "易磊讲师（高校）",
            classroom: "兴湘学院三教-103",
            weeks: "2-5,7-10",
            periodStart: 9,
            periodDuration: 2,
        },
    ],
    [
        {
            name: "区块链技术",
            teacher: "姜新文,朱哲实验师",
            classroom: "计算中心B301",
            weeks: "2-5,7-8",
            periodStart: 1,
            periodDuration: 2,
        },
        {
            name: "区块链技术",
            teacher: "姜新文,朱哲实验师",
            classroom: "计算中心B301",
            weeks: "9-10",
            periodStart: 1,
            periodDuration: 2,
        },
    ],
    [],
    []
]

const timeInterval = [
    {
        "start": "08:00",
        "end": "08:45"
    },
    {
        "start": "08:55",
        "end": "09:40"
    },
    {
        "start": "10:10",
        "end": "10:55"
    },
    {
        "start": "11:05",
        "end": "12:50"
    },
    {
        "start": "14:30",
        "end": "14:15"
    },
    {
        "start": "14:25",
        "end": "15:10"
    },
    {
        "start": "15:40",
        "end": "16:25"
    },
    {
        "start": "16:35",
        "end": "17:20"
    },
    {
        "start": "19:30",
        "end": "20:15"
    },
    {
        "start": "20:25",
        "end": "21:10"
    },
    {
        "start": "21:20",
        "end": "22:05"
    },
]

function convertToWeekInfo(str: string): {weekStart:number, weekEnd:number}[] {
    const weekInterval = str.split(',');
    const res: {weekStart:number, weekEnd:number}[] = [];

    weekInterval.forEach((interval) => {
        const tmp = interval.split('-');

        res.push({
            weekStart: parseInt(tmp[0]),
            weekEnd: parseInt(tmp[1])
        })
    })

    return res;
}

export default function Schedule(): React.JSX.Element {
    const table = new Table();

    for(let i = 0; i < 7; i++) {
        const courses: Course[] = [];
        for(let j = 0; j < classData[i].length; j++) {
            const origin = classData[i][j];
            const course = new Course(origin.name, origin.teacher, origin.classroom, {
                periodStart: origin.periodStart,
                periodDuration: origin.periodDuration,
                weekInfo: convertToWeekInfo(origin.weeks),
            })

            courses.push(course);
        }

        table.initTable(i + 1, courses);
    }

    // 左侧时间表
    let timeListWithGap = timeInterval.reduce((acc: React.JSX.Element[], item, index) => {
        let ss;

        // 防止上边界和gapItem重合
        if(index % 4 === 0) {
            ss = {...styleSheet.timeItem, "borderTopWidth": 0};
        }
        else {
            ss = styleSheet.timeItem;
        }

        const view = (
            <View style={ss}>
                <Text style={styleSheet.tItemBoldText}>{index + 1}</Text>
                <Text style={styleSheet.tItemSlimText}>{item.start}</Text>
                <Text style={styleSheet.tItemSlimText}>{item.end}</Text>
            </View>
        );

        if (index % 4 === 3) {
            acc.push(view, <View style={styleSheet.timeGap} />);
        } else {
            acc.push(view);
        }

        return acc;
    }, []);

    const monthItem = (
        <View style={styleSheet.monthItem}>
            <Text style={styleSheet.monthText}>1月</Text>
        </View>
    );
    timeListWithGap = [monthItem,...timeListWithGap];

    let classList = weekTime.map((item, index) => {
        const weekdayItem = (
          <View style={styleSheet.weekdayItemWrapper}>
              <View style={styleSheet.weekdayItem}>
                  <Text style={styleSheet.wItemBoldText}>{weekdayCNName[index]}</Text>
                  <Text style={styleSheet.wItemSlimText}>{item}</Text>
              </View>
          </View>
        );

        const todayClassData = table.getClassList(2, index + 1);

        let flag = 1;
        const classItemList = todayClassData.reduce((acc: React.JSX.Element[], item, index) => {
            const space = 4 - (flag - 1) % 4;
            if(space <= item.period) {
                const view = (
                    <View style={{...styleSheet.classItem, flex: space}}>
                        <View style={{width: '100%', height: '100%', padding: 3}}>
                            {item.isEmpty ? <ClassBox color={'#ff000000'}></ClassBox> : <ClassBox course={item}></ClassBox>}
                        </View>
                    </View>
                );

                acc.push(view);

                let remainPeriod = item.period - space;
                while(remainPeriod >= 4) {
                    const secView = (
                        <View style={{...styleSheet.classItem, flex: 4}}>
                            <View style={{width: '100%', height: '100%', padding: 3}}>
                                {item.isEmpty ? <ClassBox color={'#ff000000'}></ClassBox> : <ClassBox course={item}></ClassBox>}
                            </View>
                        </View>
                    );

                    acc.push(<View style={styleSheet.classGap} />, secView);
                    remainPeriod -= 4;
                }

                if(remainPeriod !== 0) {
                    const secView = (
                        <View style={{...styleSheet.classItem, flex: remainPeriod}}>
                            <View style={{width: '100%', height: '100%', padding: 3}}>
                                {item.isEmpty ? <ClassBox color={'#ff000000'}></ClassBox> : <ClassBox course={item}></ClassBox>}
                            </View>
                        </View>
                    );

                    acc.push(<View style={styleSheet.classGap} />, secView);
                } else {
                    acc.push(<View style={styleSheet.classGap} />);
                }

            } else {
                const view = (
                    <View style={{...styleSheet.classItem, flex: item.period}}>
                        <View style={{width: '100%', height: '100%', padding: 3}}>
                            {item.isEmpty ? <ClassBox color={'#ff000000'}></ClassBox> : <ClassBox course={item}></ClassBox>}
                        </View>

                    </View>
                );

                acc.push(view);
            }

            flag += item.period;

            return acc;
        }, []);

        return (
            <View style={styleSheet.weekdayContainer}>
                {weekdayItem}
                {classItemList}
            </View>
        )
    });

    return (
        <View style={styleSheet.scheduleContainer}>
            <View style={styleSheet.timeContainer}>
                {timeListWithGap}
            </View>
            {classList}
        </View>
    );
}

const styleSheet = StyleSheet.create({
   scheduleContainer: {
       width: '100%',
       flex: 1,
       display: 'flex',
       flexDirection: 'row'
   },

    timeContainer: {
       width: 33,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#eee',
    },

    tItemBoldText: {
        width: '100%',
        height: 30,
        textAlign: 'center',
        lineHeight: 30,
        fontWeight: '600',
        paddingBottom: 6,
        color: '#000',
    },

    tItemSlimText: {
        width: '100%',
        textAlign: 'center',
        fontWeight: '200',
        fontSize: 11,
        color: '#8f8f8f',
    },

    monthItem: {
       width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    monthText: {
        width: 13,
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#000',
        fontWeight: 'bold',
    },

    timeItem: {
       flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderTopWidth: .5,
        borderTopColor: '#eee',
    },

    timeGap: {
       height: 7,
        width: '100%',
        backgroundColor: '#eee',
    },

    weekdayContainer: {
       backgroundColor: '#fafafa',
       flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },

    weekdayItemWrapper: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 1,
    },

    weekdayItem: {
        flex: 1,
       margin: 5,
       display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    wItemBoldText: {
       width: '100%',
        fontWeight: 'bold',
        fontSize: 13,
        color: '#000',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    wItemSlimText: {
        width: '100%',
        fontWeight: '200',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    classItem: {
        width: '100%',
        // backgroundColor: '#fff',
    },

    classGap: {
        height: 7,
        width: '100%',
        backgroundColor: '#fafafa',
    }
});
