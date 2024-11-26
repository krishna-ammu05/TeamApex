"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tUser;
//it will check the order of the array
tUser = ["krish", 234, true];
var rgb = [255, 234, 232];
var newUser = [112, "example@google.com"];
newUser[1] = "krishna";
newUser.push(90);
//Enums
//Enums allow a developer to define a set of named constants. Using enums can make 
//it easier to document intent, or create a set of distinct cases. 
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 13] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
//Numeric enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//String enums
(function (Direction) {
    Direction["u"] = "UP";
    Direction["down"] = "DOWN";
    Direction["left"] = "LEFT";
    Direction["right"] = "RIGHT";
})(Direction || (Direction = {}));
//constant enums
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
//Enums at compile time
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    var num = LogLevel[key];
    if (num <= LogLevel.INFO) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}
printImportant("ERROR", "This is a message");
