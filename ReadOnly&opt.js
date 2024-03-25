"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return ({ _id: "xyz", name: "", email: "", isActive: false, phoneNumber: 123 });
}
var user = {
    _id: "xyz",
    name: "ali",
    email: "example@gmail.com",
    isActive: false,
    phoneNumber: 123
}; // notice that creaditCard field is not there means it is optional
user.name = "fahad"; // allowed
var user2 = {
    pin: 1234,
    creationDate: "1st oct 2023",
    name: "ali"
};
console.log(user2);
