interface StudentRecord {
    emailAddress: string,
    createdTimestamp: number,
    parentEmailAddress: string
}

interface CourseEnrollment {
    ID: number,
    name: string,
    gradeLevel: number,
    enrolledTimestamp: number
}

class User {
    protected emailAddress: string;
    protected createdTimestamp: number;
    protected constructor(emailAddress: string, createdTimestamp: number) {
        this.emailAddress = emailAddress;
        this.createdTimestamp = createdTimestamp;
    };
}

class Student extends User {
    courseEnrollments: CourseEnrollment[]
    protected record: StudentRecord

    constructor(courseEnrollments: CourseEnrollment[], record: StudentRecord) {
        super(record.emailAddress, record.createdTimestamp);
        this.courseEnrollments = courseEnrollments;
        this.record = record;
    };

    getCoursesByGradeLevel() : Map <number, string[]> {
        const mappedCourses = new Map()
        this.courseEnrollments.forEach((course) => {
            if (mappedCourses.has(course.gradeLevel)) {
                mappedCourses.get(course.gradeLevel).push(course.name)
            } else {
                mappedCourses.set(course.gradeLevel, [course.name])
            }
        })
        return mappedCourses
    }

    get parentEmail(): string {
        return this.record.parentEmailAddress
    }

    getMostRecentCourse() : null | CourseEnrollment {
        let mostRecent = null;
        if (this.courseEnrollments.length > 0) {
            const sortedCourses = this.courseEnrollments.sort((a, b) => {
                return new Date(b.enrolledTimestamp).getTime() - new Date(a.enrolledTimestamp).getTime()
            });
            mostRecent = sortedCourses[0]
        }
        return mostRecent;
    }
}


const studentList = {
    studentRecord: {
        emailAddress: "test@gmail.com",
        createdTimestamp: 1651445913590,
        parentEmailAddress: "parent@gmail.com"

    },
    courseEnrollement: [
        {
            ID: 12,
            name: "math",
            gradeLevel: 0,
            enrolledTimestamp: 1651445915304
        },
        {
            ID: 13,
            name: "science",
            gradeLevel: 1,
            enrolledTimestamp: 1651445917130
        },
        {
            ID: 14,
            name: "language",
            gradeLevel: 2,
            enrolledTimestamp: 1651445918139
        },
        {
            ID: 15,
            name: "dumb",
            gradeLevel: 3,
            enrolledTimestamp: 1651446063228
        },
        {
            ID: 16,
            name: "Psycology",
            gradeLevel: 3,
            enrolledTimestamp: 1651446063229
        },
    ]
    
}


let test = new Student(studentList.courseEnrollement, studentList.studentRecord)
console.log(test.parentEmail)
console.log(test.getCoursesByGradeLevel())
console.log(test.getMostRecentCourse())