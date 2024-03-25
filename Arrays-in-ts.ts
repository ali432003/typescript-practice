let digits : number[] = []

digits.push(2)
digits.push(4)

let names : string[] = []

names.push("fahad")
names.push("ali")



// type casting 

type User = {
    name : string
    isActive : boolean
}

var users : User[] = []

users.push({name:"ali", isActive : false})

console.log(names,digits,users)

export {}