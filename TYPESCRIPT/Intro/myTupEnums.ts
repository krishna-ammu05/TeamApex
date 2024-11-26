let tUser : [string,number,boolean]
//it will check the order of the array
tUser =["krish",234,true]
let rgb:[number,number,number] = [255,234,232]
type User = [number,string]

const newUser :User = [112,"example@google.com"]
newUser[1] ="krishna"
newUser.push(90)


//Enums
//Enums allow a developer to define a set of named constants. Using enums can make 
//it easier to document intent, or create a set of distinct cases. 
enum SeatChoice{
    AISLE = 10,
    MIDDLE = 11,
    WINDOW =12,
    FOURTH =13
}
const hcSeat = SeatChoice.AISLE

//Numeric enums
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }
//String enums
enum Direction {
    u = "UP",
    down = "DOWN",
    left = "LEFT",
    right = "RIGHT",
  }

//constant enums
enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length,
}

//Enums at compile time
enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
  }
   
  /**
   * This is equivalent to:
   * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
   */
  type LogLevelStrings = keyof typeof LogLevel;
   
  function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
      console.log("Log level key is:", key);
      console.log("Log level value is:", num);
      console.log("Log level message is:", message);
    }
  }
  printImportant("ERROR", "This is a message");


//Objects with Enums
// const enum EDirection {
//     Up,
//     Down,
//     Left,
//     Right,
//   }
   
//   const ODirection = {
//     Up: 0,
//     Down: 1,
//     Left: 2,
//     Right: 3,
//   } as const;
   
//   EDirection.Up;
             
// //   (enum member) :EDirection.Up = 0
   
//   ODirection.Up;
             
// //   (property) Up: 0
   
//   // Using the enum as a parameter
//   function walk(dir: EDirection) {}
   
//   // It requires an extra line to pull out the values
//   type Direction = typeof ODirection[keyof typeof ODirection];
//   function run(dir: Direction) {}
   
//   walk(EDirection.Left);
//   run(ODirection.Right);

export{}