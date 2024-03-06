
type TechnologiesType = {
    id: number
    title: string
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}



export const student: StudentType = {
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

console.log(student.address.city.countryTitle)
console.log(student.technologies[0].title)