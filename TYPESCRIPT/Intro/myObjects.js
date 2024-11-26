"use strict";
// const User = {
//     name : "krishna",
//     email: "krish@5",
//     isActive :true
// }
// function createUser (name :string,isPaid :boolean){}
Object.defineProperty(exports, "__esModule", { value: true });
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "krishna", isPaid: false, email: "krishn@.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 400 };
}
function create_user(user) {
    return { name: "", email: "", isActive: true };
}
create_user({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "krish",
    email: "kris@.com",
    isActive: false
};
myUser.email = "krishn@gmail.com";
console.log("MyObjects")
