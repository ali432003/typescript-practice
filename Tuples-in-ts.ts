let laptop : [string,number,boolean] = ["dell latitude 33480",7,false] // tuples in js

// type aliase
type User = [string,number]

let ali : User = ["name",21]

// ali.push(true) 
// ali[1] = "xyz" // allowed in older versions but now it is fixed !

// use case 

// let the data is coming from an api so want to restrict the order of it

let userDB : [string,string,number,boolean] = ["name","email",123,false]

userDB.push("haha") // allowed 
// userDB[1] = 32 not allowd 

// to avoid this scenario use the above approach to set the types of data coming from db
console.log(userDB)

export {}
