export let user  = {
    name: 'Kataerel',
    age: 18
}

function increaseAge(user: { age: number; }) {
    user.age++;
}