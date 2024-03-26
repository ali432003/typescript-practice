type User = {
    readonly _id: string   // means this value is ony readable and cannot be updated
    name: string
    email: string
    isActive: boolean
    phoneNumber: number
    creditCard?: number //means this field is optional
}

function createUser(user: User): User {
    return ({ _id: "xyz", name: "", email: "", isActive: false, phoneNumber: 123 })
}

let user: User = {
    _id: "xyz",
    name: "ali",
    email: "example@gmail.com",
    isActive: false,
    phoneNumber: 123
} // notice that creaditCard field is not there means it is optional

user.name = "fahad" // allowed
// user._id = "abc"  not allowed as it is readonly

// combininf two types

type cardNumber = {
    pin : number
}
type cardDate = {
    creationDate : string
}

type cardDetails = cardNumber & cardDate & {
    name : string
}

let user2 : cardDetails = {
    pin : 1234,
    creationDate : "1st oct 2023",
    name : "ali"
}


export {}