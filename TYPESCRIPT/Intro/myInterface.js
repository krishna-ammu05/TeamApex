"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var krishna = { dbId: 99, email: "bDJjh",
    userId: 243, githubToken: "github",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.textContent = greeter(user);
