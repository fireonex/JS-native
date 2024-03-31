export type UserType = {
    name: string,
    age: number
    address: {title: string}
}



function increaseAge(u: UserType) {
    u.age++;
}

test('reference type test', () => {

    let user  = {
        name: 'Kataerel',
        age: 18,
        address: {
            title: 'Russia'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(19)

    let woman = user;

    woman.age = 180

    expect(user.age).toBe(180)
})

test('array reference test', () => {
    let users  = [
        {
            name: 'Kataerel',
            age: 18
        },
        {
            name: 'Jess',
            age: 20
        }
    ]

    let admins = users

    admins.push({name: 'Sam', age: 30})


    expect(users[2]).toEqual({name: 'Sam', age: 30})
})


test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount

    adminsCount = adminsCount + 1;

})


test('reference test', () => {

    const address = {
        title: 'Russia'
    }

    let user  = {
        name: 'Kataerel',
        age: 18,
        address: address
    }

    let addr = user.address

    let user2: UserType = {
        name: 'Frodo',
        age: 50,
        address: address
    }

    address.title = 'Shire';

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Shire')
})


test('reference array test', () => {

    const address = {
        title: 'Russia'
    }

    let user  = {
        name: 'Kataerel',
        age: 18,
        address: address
    }

    let user2: UserType = {
        name: 'Frodo',
        age: 50,
        address: address
    }

    const users = [user, user2, {name: 'Sam', age: 45, address: address}]

    const heroes = [user, user2]

    heroes[0].age = 180

    address.title = 'Shire';

    expect(user.age).toBe(180)
    expect(users[0].age).toBe(180)
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e'];

    letters.sort();

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
});




