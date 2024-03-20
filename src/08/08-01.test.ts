export type userType = {
    [key: string]: {id: number, name: string}
}

let user: userType

beforeEach( () => {
    user = {
        '111': {id: 111, name: 'Katara'},
        '22': {id: 22, name: 'Mary'},
        '3030': {id: 3030, name: 'Kataerel'},
        '404': {id: 404, name: 'Darth Fireonex'}
    }
})


test('should update user', () => {
    user['22'].name = ('Maria')

    expect(user['22']).toEqual({id: 22, name: 'Maria'})
})

test('should delete user', () => {
    delete user['22']

    expect(user['22']).toBeUndefined()
})

