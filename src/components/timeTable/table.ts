
interface classObject {
    name?: string | undefined;
    teacher?: string;
    classroom?: string;
    weeks?: string;
    period: number;
    isEmpty: boolean;
}

export default class Table {

    getClassList(weekNumber: number, weekDay: number): classObject[] {
        const list: classObject[] = [];

        for(let i = 0; i < 4; i++) {
            list.push({
                name: '111',
                teacher: '111',
                classroom: '111',
                weeks: '111',
                period: 2,
                isEmpty: false,
            });
        }

        list.push({
            period: 3,
            isEmpty: true,
        })

        return list;
    }

    check(classList: classObject[]): boolean {
        let count = 0;
        for(const item of classList) {
            count += item.period;
        }

        return count === 11;
    }

}