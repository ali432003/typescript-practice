const data = {
    name: "ali",
    age: 20,
    isAct: false
}

let creatUser = ({ name: string, age: number, isAct: boolean }) => {
    return {
        name: "ali",
        age: 20,
        isAct: false
    }
}

const data2 = {
    name: "ali",
    age: 20,
    isAct: false,
    email: "aa@gg.com"
}

function createUser2(name, age, isAct): { name: string, age: number, isAct: boolean } {
    // return {
    //     name: "ali",
    //     age: 20,
    //     isAct: false,
    //     // email : "aa@gg.com"  unknow property
    // }
    return (data2) // this shows me no error this is bad behaivour of objects in ts
}

//  Type Aliases

type data = {
    name: string;
    age: number;
    isAct: boolean
}

function createUser3(user: data): data {
    return {
        name: "ali",
        age: 20,
        isAct: false
    }
}

createUser3({ name: "", age: 1, isAct: false })