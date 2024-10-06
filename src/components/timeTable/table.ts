import Course from "./course";

export interface ClassObject {
    name?: string | undefined;
    teacher?: string;
    classroom?: string;
    weeks?: string;
    period: number;
    isEmpty: boolean;
}

type WeekdayMap = {
    [key: number]: Course[];
}

export default class Table {
    table: WeekdayMap = {};

    constructor() {
        for(let i = 1; i <= 7; i++) {
            this.table[i] = [];
        }
    }

    public initTable(weekday: number, courses: Course[]) {
        courses.forEach((course) => {
            this.addClass(weekday, course);
        })

        this.update(weekday);
    }

    /**
     * @description: 向Schedule组件提供某周某天的课程列表
     * @author: zeLNer
     * @date: 2024-10-5
     * @return: classObject[]
     * @param weekNumber
     * @param weekDay
     */
    getClassList(weekNumber: number, weekDay: number): ClassObject[] {
        const list: ClassObject[] = [];
        let index = 1;

        for(const course of this.table[weekDay]) {
            const start = course.getWeekStart();
            const end = course.getWeekEnd();

            for(let i = 0; i < start.length; i++) {
                if(start[i] <= weekNumber && end[i] >= weekNumber) {
                    const periodStart = course.getPeriodStart();
                    if(periodStart > index) {
                        list.push({
                            period: periodStart - index,
                            isEmpty: true,
                        })

                        index += (periodStart - index);
                    }

                    list.push({
                        name: course.getName(),
                        teacher: course.getTeacher(),
                        classroom: course.getClassroom(),
                        weeks: course.getWeekString(),
                        period: course.getPeriodDuration(),
                        isEmpty: false,
                    });

                    index += (course.getPeriodDuration());
                    //TODO: 还没有写完，使用index跟踪第一个没有被占用的空位
                }
            }


        }

        // 判断最后一节为空的情况
        if(index <= 11) {
            list.push({
                period: 11 - index + 1,
                isEmpty: true,
            })
        }

        return list;
    }

    public check(classList: ClassObject[]): boolean {
        let count = 0;
        for(const item of classList) {
            count += item.period;
        }

        return count === 11;
    }

    private addClass(weekday: number, course: Course) {
        this.table[weekday].push(course);
    }

    private update(weekday: number) {
        this.table[weekday].sort((a, b) => {
            return a.getPeriodStart() - b.getPeriodStart();
        })
    }

    public addCustomArrangement() {

    }

}
