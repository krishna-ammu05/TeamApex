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




function createUser ({name: string,isPaid :boolean}){}
let newUser = {name:"krishna",isPaid:false,email:"krishn@.com"}
createUser (newUser)



function createCourse ():{name :string,price: number}{
  return {name :"reactjs", price:400}
}


//type Alias

type User ={
  name:string;
  email:string;
  isActive:boolean
}


function create_user (user:User){
  return {name:"",email:"",isActive:true}
}
create_user({name:"",email:"",isActive:true})


type user={
  //readonly is used to read the values and it does not u to modify unique values like id of mysql
  readonly _id:string
  name:string
  email:string
  isActive :boolean
  creditcardDetails?:number
}
let myUser: user={
  _id:"1234",
  name:"krish",
  email:"kris@.com",
  isActive:false
}
type cardNumber ={
  cardNo:string
}
type cardDate ={
  cardDate:string
}
//defining the new type based the combination of previous two types
type cardDetails =cardNumber & cardDate &{
  cvv:number
}
myUser.email ="krishn@gmail.com"
//myUser._id="zhjh"
export{}