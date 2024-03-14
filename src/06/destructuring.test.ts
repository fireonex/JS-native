
type AddressType = {
    street: {
        title: string
    }
}

type LessonType = {
    title: string
    name: string
}

export type HumanType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: AddressType
}

export const f = () => {}

let props: HumanType;

beforeEach(() => {
    props = {
        name: 'Kataerel',
        age: 18,
        lessons: [{title: '1', name: 'react'}, {title: '2', name: 'ts'}, {title: '3', name: 'js'}],
        address: {
            street: {
                title: 'Baltian street'
            }
        }
    }
})



test('person test', ()=> {

    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(18);
    expect(lessons.length).toBe(2)
    expect(title).toBe('Baltian street')
})

test('tests', ()=> {
    const lesson1 = props.lessons[0];
    const lesson2 = props.lessons[1]

    const [ ,ls2, ...restLessons] = props.lessons

    expect(lesson1.title).toBe('1')
    expect(lesson2.title).toBe('2')

    //expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
    //expect(ls3.title).toBe('3')

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0]).toStrictEqual({title: '3', name: 'js'})
})
