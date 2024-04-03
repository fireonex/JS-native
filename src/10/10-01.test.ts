import {
    addingUserCompany,
    addNewUserBooks, changingPeopleName, changingUserCompany,
    makeHairStyle,
    man1Type, man2Type,
    moveUser, peopleType, removeBook, updateBook, updateCompanyTitle2,
    upgradeUserLaptop, upgradingFriendName,
    upgradingMotherAge,
    UserType, UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from "./10-01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})


test('change address test', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 20
        },
        laptop: {
            title: 'Legion'
        }
    }

    const movedUser = moveUser(user, 'Berlin')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Berlin')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 20
        },
        laptop: {
            title: 'Legion'
        }
    }

    const newUserLaptop = upgradeUserLaptop(user, 'Macbook')


    expect(user).not.toBe(upgradeUserLaptop)
    expect(user.address).toBe(newUserLaptop.address)
    expect(user.laptop).not.toBe(newUserLaptop.laptop)
    expect(newUserLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Legion')
})


test('add new book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 20
        },
        laptop: {
            title: 'Legion'
        },
        books: ['darth bane 1', 'darth bane 2', 'darth bane 3', 'thrawn']
    }

    const newUserBooks = addNewUserBooks(user, 'js')


    expect(user).not.toBe(newUserBooks)
    expect(user.books).not.toBe(newUserBooks.books)
    expect(user.books.length).toBe(4)
    expect(newUserBooks.books[4]).toBe('js')

    expect(user.address).toBe(newUserBooks.address)
    expect(user.laptop).toBe(newUserBooks.laptop)

})

test('upgrade js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 20
        },
        laptop: {
            title: 'Legion'
        },
        books: ['darth bane 1', 'darth bane 2', 'darth bane 3', 'thrawn']
    }

    const upgradeUserBook = updateBook(user, 'thrawn', 'ts')


    expect(user).not.toBe(upgradeUserBook)
    expect(user.books).not.toBe(upgradeUserBook.books)
    expect(user.books.length).toBe(4)
    expect(upgradeUserBook.books[3]).toBe('ts')

    expect(user.address).toBe(upgradeUserBook.address)
    expect(user.laptop).toBe(upgradeUserBook.laptop)

})

test('remove book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 20
        },
        laptop: {
            title: 'Legion'
        },
        books: ['darth bane 1', 'darth bane 2', 'darth bane 3', 'thrawn']
    }

    const removeUserBook = removeBook(user, 'darth bane 3')


    expect(user).not.toBe(removeUserBook)
    expect(user.books).not.toBe(removeUserBook.books)
    expect(user.books.length).toBe(4)
    expect(removeUserBook.books.length).toBe(3)
    expect(removeUserBook.books[2]).toBe('thrawn')

    expect(user.address).toBe(removeUserBook.address)
    expect(user.laptop).toBe(removeUserBook.laptop)

})

test('add user company', () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 20
        },
        laptop: {
            title: 'Legion'
        },
        companies: [
            {id: 1, title: 'sber'},
            {id: 2, title: 'nlmk'},
        ]
    }

    const addUserCompany = addingUserCompany(user, 3, 'yandex')


    expect(user).not.toBe(addUserCompany)
    expect(user.companies.length).toBe(2)
    expect(addUserCompany.companies.length).toBe(3)
    expect(addUserCompany.companies[2].title).toBe('yandex')

    expect(user.address).toBe(addUserCompany.address)
    expect(user.laptop).toBe(addUserCompany.laptop)

})

test('update company', () => {

    let companies = {
        'Dimych': [
            { id: 1, title: 'сбер' },
            { id: 2, title: 'nlmk' }
        ],
        'Katara': [
            { id: 1, title: 'yandex' },
            { id: 2, title: 'google' }
        ]
    }

    const copy = updateCompanyTitle2(companies, 'Dimych', 1, 'sber')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Katara']).toBe(companies['Katara'])
    expect(copy['Dimych'][0].title).toBe('sber')

})


test('update user company', () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 20
        },
        laptop: {
            title: 'Legion'
        },
        companies: [
            {id: 1, title: 'сбер'},
            {id: 2, title: 'nlmk'},
        ]
    }

    const changeUserCompany = changingUserCompany(user, 1, 'sber') as UserWithLaptopType & UserWithCompaniesType


    expect(user).not.toBe(changeUserCompany)
    expect(user.companies.length).toBe(2)
    expect(changeUserCompany.companies.length).toBe(2)
    expect(user.companies).not.toBe(changeUserCompany.companies)
    expect(changeUserCompany.companies[0].title).toBe('sber')

    expect(user.address).toBe(changeUserCompany.address)

})


//-----------------------------------------------------------------------------------------------------------
test('changing mother age', () => {

    // 3. Object inside an object
    let man1: man1Type = {
        name: 'John',
        age: 28,
        mother: {
            name: 'Kate',
            age: 50
        }
    };

    const newMotherAge = upgradingMotherAge(man1, 55)


    expect(man1).not.toBe(newMotherAge)
    expect(man1.age).toBe(newMotherAge.age)
    expect(man1.mother.age).not.toBe(newMotherAge.mother.age)
    expect(newMotherAge.mother.age).toBe(55)
    expect(man1.mother.age).toBe(50)
})

//-------------------------------------------------------------------------------------------------------------------
test('upgrading Friend Name', () => {

    //4.Array of primitives inside an object
    let man2: man2Type = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };

    const man2FullCopy = upgradingFriendName(man2, 1, 'Sam')


    expect(man2).not.toBe(man2FullCopy)
    expect(man2.age).toBe(man2FullCopy.age)
    expect(man2.friends[1]).not.toBe(man2FullCopy.friends[1])
    expect(man2FullCopy.friends[1]).toBe('Sam')
    expect(man2.friends[1]).toBe("Steven")
})

//---------------------------------------------------------------------------------------------//
test('changing people name', () => {

    // 5 Array of objects

    let people: Array<peopleType> = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];


    const peopleFullCopy = changingPeopleName(people, 1, 'Sam')


    expect(people).not.toBe(peopleFullCopy)
    expect(people[2]).toBe(peopleFullCopy[2])
    expect(people[1]).not.toBe(peopleFullCopy[1])

    //todo
    //expect(peopleFullCopy[1].name).toBe('Sam')
})
