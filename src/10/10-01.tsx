export type UserType = {
    name: string;
    hair: number;
    address: { city: string, house?: number };
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithCompaniesType = UserType & {
    companies: Array<{ id: number, title: string }>
}

export type CompaniesType = {
    id: number,
    title: string
}


export function makeHairStyle(u: UserType, short: number) {
    const copy = {
        ...u,
        hair: u.hair / short
    }
    //copy.hair = u.hair / short
    return copy;
}

export function moveUser(u: UserWithLaptopType, newCity: string) {
    return {
        ...u,
        address: {...u.address, city: newCity}
        //св-во address перезатираем новым объектом, который состоит из двух
        //примитивов, из них изменяем city

    }

    // copy.address = {
    //     ...copy.address,
    //     city: newCity
    // } //создаём копию и перезатираем новым объектом(значением)
}

export function upgradeUserLaptop(u: UserWithLaptopType, newLaptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: newLaptop}

    }
}

export function addNewUserBooks(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
        //books: [...u.books, u.books.concat(newBooks)]

    }
}


export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {

    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    };

    // return {
    //     ...u,
    //     books: //[...u.books, u.books.find(el => el === oldBook ? )]
    //     //books: [...u.books, u.books.concat(newBooks)]
    //
    // }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== book)
    };
}

export function addingUserCompany(u: UserWithLaptopType & UserWithCompaniesType,
                                  newCompanyIndex: number,
                                  newCompanyTitle: string) {

    let newCompany = {id: newCompanyIndex, title: newCompanyTitle}

    return {
        ...u,
        companies: [...u.companies, newCompany]
    };

    // return {
    //     ...u,
    //     books: u.books.map(b => b === oldBook ? newBook : b)
    // };

    // let copy = {
    //     ...u
    // }
    //
    // copy.companies.
    //
    // return copy;

}

export function changingUserCompany(u: UserWithCompaniesType,
                                    companyId: number,
                                    companyTitle: string) {

    return {
        ...u,
        companies: u.companies.map(c => c.id === companyId ? {...c, title: companyTitle} : c)
    };

    // let copy = {
    //     ...u,
    // }
    //
    // copy.companies[companyIndex].title = companyTitle
    //
    // return copy;


    // return {
    //     ...u,
    //     companies: [...u.companies, newCompany]
    // };
}

export function updateCompanyTitle2(companies: {
                                        [key: string]: Array<CompaniesType>
                                    },
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) {

    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(
        c => c.id === companyId
            ? {...c, title: newTitle}
            : c
    )

    return companyCopy;
}


//---------------------------------------------------------------------------------//


export type man1Type = {
    name: string
    age: number
    mother: { name: string, age: number }
}

export function upgradingMotherAge(man: man1Type, newMothersAge: number) {
    return {
        ...man,
        mother: {...man.mother, age: newMothersAge}

    }
}

//------------------------------------------------------------------------------------//

export type man2Type = {
    name: string
    age: number
    friends: Array<string>
}

export function upgradingFriendName(man: man2Type, friendIndex: number, newFriendName: string) {
    return {
        ...man,
        friends: man.friends.map((friend, index) => index === friendIndex ? newFriendName : friend)

    }
}

//---------------------------------------------------------------------------------------------//


export type peopleType = {
    name: string
    age: number
}

export function changingPeopleName(people: Array<peopleType>, arrIndex: number, newName: string): Array<peopleType> {

    return people.map((el, index) => index === arrIndex ? {...el, name: newName} : {...el});

    // Создаем копию массива, глубоко копируя каждый объект внутри
    // let peopleCopy = people.map((person, index) => {
    //     if (index === arrIndex) {
    //         // Для изменяемого объекта создаем новый объект с новым именем
    //         return { ...person, name: newName };
    //     } else {
    //         // Для всех остальных объектов просто создаем копию
    //         return { ...person };
    //     }
    // });
    //
    // return peopleCopy;
}

//---------------------------------------------------------------------------------------------//

export type man3Type = {
    name: string
    age: number
    friends: Array<{ name: string, age: number }>
}

export function changingMan3(man: man3Type, friendIndex: number, newAge: number) {
    return {
        ...man, friends: man.friends.map(
            (el, index) =>
                index === friendIndex
                    ? {...el, age: newAge}
                    : el
        )
    }
}

//---------------------------------------------------------------------------------------------//

type motherType = {
    name: string
    age: 50
    work: { position: string, experience: number }
}

export type man4Type = {
    name: string
    age: number
    mother: motherType
}

export function changingMan4(man: man4Type, newExperience: number) {
    return {
        ...man, mother: {...man.mother, work: {...man.mother.work, experience: newExperience}}
    }
}

//---------------------------------------------------------------------------------------------//

type motherType2 = motherType & {
    parents: Array<{ name: string, age: number }>
}

export type man5Type = {
    name: string
    age: number
    mother: motherType2
}

export function changingMan5(man: man5Type, parentIndex: number, newParentAge: number) {
    return {
        ...man, mother: {
            ...man.mother, parents: man.mother.parents.map(
                (el, index) => index === parentIndex
                    ? {...el, age: newParentAge}
                    : el
            )
        }
    }
}

//---------------------------------------------------------------------------------------------//
type dishType = {
    title: string
}

type motherType3 = motherType2 & {
    parents: Array<{
        name: string,
        age: number,
        favoriteDish: dishType
    }>
}

export type man6Type = {
    name: string
    age: number
    mother: motherType3
}

export function changingMan6(man: man6Type, parentIndex: number, newParentDish: string) {

    return {
        ...man, mother: {
            ...man.mother, parents: man.mother.parents.map(
                (el, index) =>
                    index === parentIndex
                        ? {...el, favoriteDish: {title: newParentDish}}
                        : el
            )
        }
    }
}

//---------------------------------------------------------------------------------------------//

type dishType2 = {
    title: string
    ingredients: Array<{ title: string, amount: number }>
}

type motherType4 = motherType2 & {
    parents: Array<{
        name: string,
        age: number,
        favoriteDish: dishType2
    }>
}

export type man7Type = {
    name: string
    age: number
    mother: motherType4
}

export function changingMan7(man: man7Type,
                             parentIndex: number,
                             ingredientIndex: number,
                             newDishIngredientTitle: string): man7Type {

    return {
        ...man,
        mother: {
            ...man.mother,
            // parents: man.mother.parents.map((el, index) =>
            //     index === parentIndex
            //         ? {
            //             ...el,
            //             favoriteDish: {
            //                 ...el.favoriteDish,
            //                 ingredients: el.favoriteDish.ingredients.map((ing, idx) =>
            //                     idx === ingredientIndex
            //                         ? { ...ing, title: newDishIngredientTitle }
            //                         : ing
            //                 )
            //             }
            //         }
            //         : el
            // )
        }
    };
}