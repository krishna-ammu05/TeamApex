var score = 55;
score = 44;
score = "55";
// function printId(id: number | string) {
//     console.log("Your ID is: " + id);
//   }
//   // OK
//   printId(101);
//   // OK
//   printId("202");
// Error
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
function printTextOrNumberOrBool(textOrNumberOrBool) {
    console.log(textOrNumberOrBool);
}
var details = { name: "krish", id: 555 };
details = { usernmae: "hk", id: 334 };
function getDbId(id) {
    console.log("DB ID is :".concat(id));
}
getDbId(3);
getDbId("3");
//Array
var data = [1, 2, 3];
var data1 = ["apple", "mango", "banana"];
var data2 = [1, "8", 2, 3];
console.log(data1);
console.log(data2);
var seatAllotment;
seatAllotment = "aisle";
