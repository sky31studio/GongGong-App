import React from "react";
import {StyleSheet, Text, View} from "react-native";
import ClassBox from "./classBox";
import Table from "./table";

const classData = {
    "周一": [
        [],
        [
            {
                "name": "网络安全协议分析",
                "teacher": "周维副教授",
                "classroom": "北山二阶梯",
                "weeks": "2-6,8-14"
            }
        ],
        [
            {
                "name": "算法设计与分析",
                "teacher": "李艳春副教授",
                "classroom": "计算中心B202",
                "weeks": "2-4,8-11"
            }
        ],
        [
            {
                "name": "马克思主义基本原理",
                "teacher": "宋婧讲师（高校）",
                "classroom": "逸夫楼-410",
                "weeks": "2-3,5-6,8-11"
            }
        ],
        []
    ],
    "周二": [
        [
            {
                "name": "算法设计与分析",
                "teacher": "李艳春副教授",
                "classroom": "计算中心B202",
                "weeks": "2-5,7-10"
            }
        ],
        [
            {
                "name": "网络安全协议分析",
                "teacher": "周维副教授",
                "classroom": "北山二阶梯",
                "weeks": "2-5,7-14"
            }
        ],
        [
            {
                "name": "量子计算",
                "teacher": "李琴教授",
                "classroom": "兴教楼C203",
                "weeks": "2-5,7-10"
            }
        ],
        [],
        []
    ],
    "周三": [
        [
            {
                "name": "区块链技术",
                "teacher": "姜新文,朱哲实验师",
                "classroom": "计算中心B301",
                "weeks": "2-5,7-8"
            },
            {
                "name": "区块链技术",
                "teacher": "姜新文,朱哲实验师",
                "classroom": "计算中心B301",
                "weeks": "9-10"
            }
        ],
        [
            {
                "name": "云计算安全",
                "teacher": "余浩",
                "classroom": "兴教楼C203",
                "weeks": "11-16"
            },
            {
                "name": "云计算安全",
                "teacher": "余浩",
                "classroom": "信息楼603",
                "weeks": "17-18"
            }
        ],
        [],
        [
            {
                "name": "网络攻防",
                "teacher": "邓书华副教授",
                "classroom": "兴教楼C401",
                "weeks": "2-5,7-8"
            },
            {
                "name": "网络攻防",
                "teacher": "邓书华副教授",
                "classroom": "信息楼603",
                "weeks": "9-10"
            }
        ],
        [
            {
                "name": "网络空间安全法律法规",
                "teacher": "易磊讲师（高校）",
                "classroom": "兴湘学院三教-103",
                "weeks": "2-5,7-10"
            }
        ]
    ],
    "周四": [
        [
            {
                "name": "Linux系统分析与安全",
                "teacher": "叶松涛副教授",
                "classroom": "兴教楼C204",
                "weeks": "2-5,7-10"
            }
        ],
        [
            {
                "name": "量子计算",
                "teacher": "李琴教授",
                "classroom": "兴教楼C203",
                "weeks": "2-5,7-10"
            }
        ],
        [
            {
                "name": "云计算安全",
                "teacher": "余浩",
                "classroom": "兴教楼C203",
                "weeks": "11-16"
            },
            {
                "name": "云计算安全",
                "teacher": "宋婧讲师（高校）",
                "classroom": "逸夫楼-410",
                "weeks": "2-5,7-10"
            },
            {
                "name": "云计算安全",
                "teacher": "余浩",
                "classroom": "信息楼603",
                "weeks": "17-18"
            }
        ],
        [],
        [
            {
                "name": "网络空间安全法律法规",
                "teacher": "易磊讲师（高校）",
                "classroom": "兴湘学院三教-103",
                "weeks": "2-5,7-10"
            }
        ]
    ],
    "周五": [
        [
            {
                "name": "Linux系统分析与安全",
                "teacher": "叶松涛副教授",
                "classroom": "兴教楼C204",
                "weeks": "2-5,7-10"
            }
        ],
        [
            {
                "name": "形势与政策5",
                "teacher": "许善品副教授",
                "classroom": "逸夫楼第二报告厅",
                "weeks": "9-10"
            }
        ],
        [
            {
                "name": "区块链技术",
                "teacher": "姜新文,朱哲实验师",
                "classroom": "计算中心B301",
                "weeks": "2-5,7-8"
            },
            {
                "name": "区块链技术",
                "teacher": "姜新文,朱哲实验师",
                "classroom": "计算中心B301",
                "weeks": "9-10"
            }
        ],
        [
            {
                "name": "网络攻防",
                "teacher": "邓书华副教授",
                "classroom": "兴教楼C401",
                "weeks": "2-5,7-8"
            },
            {
                "name": "网络攻防",
                "teacher": "邓书华副教授",
                "classroom": "信息楼603",
                "weeks": "9-10"
            }
        ],
        []
    ],
    "周六": [
        [],
        [],
        [],
        [],
        []
    ],
    "周日": [
        [],
        [],
        [],
        [],
        []
    ],
};

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

export default function Schedule(): React.JSX.Element {
    const table = new Table();

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

    const weekday = Object.keys(classData);

    let classList = weekday.map((item, index) => {
        const weekdayItem = (
          <View style={styleSheet.weekdayItemWrapper}>
              <View style={styleSheet.weekdayItem}>
                  <Text style={styleSheet.wItemBoldText}>{item}</Text>
                  <Text style={styleSheet.wItemSlimText}>01-01</Text>
              </View>
          </View>
        );

        const todayClassData = table.getClassList(1, 1);

        const classItemList = todayClassData.reduce((acc: React.JSX.Element[], item, index) => {

            const view = (
                <View style={{...styleSheet.classItem, flex: item.period}}>



                    <View style={{width: '100%', height: '100%', padding: 3}}>
                        {item.isEmpty ? <ClassBox color={'#ffffff00'}></ClassBox> : <ClassBox></ClassBox>}
                    </View>

                </View>
            );

            if (index % 4 === 3) {
                acc.push(view, <View style={styleSheet.classGap} />);
            } else {
                acc.push(view);
            }

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