

let namesObj = {
    '0':'Katara',
    '1': 'Mary',
    '2': 'Kataerel',
    '3': 'Darth Fireonex'
}

type namesType = {
    [key: string]: {id: number, name: string}
}

let names: namesType = {
    '111': {id: 111, name: 'Katara'},
    '22': {id: 22, name: 'Mary'},
    '3030': {id: 3030, name: 'Kataerel'},
    '404': {id: 404, name: 'Darth Fireonex'}
}

//(names[3030])   {id: 3030, name: 'Kataerel'}

let user = {id: 30300909, name: 'Kat'}

names[user.id] = user
delete names[user.id]
names[user.id].name = 'Sam'

export const namesArr = [
    {id: 111, name: 'Katara'},
    {id: 22, name: 'Mary'},
    {id: 3030, name: 'Kataerel'},
    {id: 404, name: 'Darth Fireonex'}
]

let namesArrCopy = [...namesArr, user]
let users = namesArr.filter(u => u.id !== user.id)

//namesArr.find(n => n.id === 3030)  {id: 3030, name: 'Kataerel'}