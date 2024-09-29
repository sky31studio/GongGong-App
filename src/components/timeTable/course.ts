
export default class Course {
    name: string;
    teacher: string;
    classroom: string;
    weeks: string;


    constructor(name: string, teacher: string, classroom: string, weeks: string) {
        this.name = name;
        this.teacher = teacher;
        this.classroom = classroom;
        this.weeks = weeks;
    }


}