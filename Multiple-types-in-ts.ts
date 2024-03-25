let id : number | string 
id = 4;
id ="4"

type user = {
    name : string
    isActive : boolean
}
type Admin = {
    userName : string
    email : string
}

let user1 : user | Admin 

user1 = {
    name : "ali",
    isActive : false,
    userName : "admin name",
    email : "haha@haha.com"
}

console.log(user1)

export {}