import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        name: "Katara",
        age: 18,
        isActive: false,
        address: {
            streetTitle: "Baltian 2",
            city: {
                title: "Pskov",
                countryTitle: "Russia"
            }
        },
        technologies: [
            {
                id: 1,
                title: "REACT"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "JS"
            },
            {
                id: 4,
                title: "NodeJS"
            },
            {
                id: 5,
                title: "HTML"
            }
        ]
    }
})

test('new skill should be added to student', () => {
    expect(student.technologies.length).toBe(5);

    addSkill(student, 'TS');

    expect(student.technologies.length).toBe(6);
    expect(student.technologies[5].title).toBe('TS');
    expect(student.technologies[5].id).toBeDefined();
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);

})

test('does student live in city?', () => {
    expect(student.isActive).toBe(false);

    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Pskov');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})