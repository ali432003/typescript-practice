"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var laptop = ["dell latitude 33480", 7, false]; // tuples in js
var ali = ["name", 21];
// ali.push(true) 
// ali[1] = "xyz" // allowed in older versions but now it is fixed !
// use case 
// let the data is coming from an api so want to restrict the order of it
var userDB = ["name", "email", 123, false];
userDB.push("haha");
// userDB[1] = 32
console.log(userDB);
