// const User = {
//     name : "krishna",
//     email: "krish@5",
//     isActive :true
// }
// function createUser (name :string,isPaid :boolean){}

// let newUser {name:"krish",isPaid :false ,email :"krish@.com"}
// createUser(newUser)
// export {}


//Type Aliases

type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });


