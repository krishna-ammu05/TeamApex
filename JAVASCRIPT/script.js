console.log("Welcome to javascript");
console.log("Hello World");
// Variables
var var_name="Welcome to variables";
console.log(var_name);

let var_name2="Hello";
console.log(var_name2);
//const is also a var type whose value is cannot change through the script
// we never reassign values to constant variables
const var_name1="Welcome to JS variables";
console.log(var_name1);


//DATA TYPES
//strings
const name1="javascript";
const backticks=`welcome to ${name1}!`;
console.log( typeof backticks);
console.log(backticks);
//Numbers
const wholenumber=5;
const decimalnumber=0.5;
console.log(typeof wholenumber);
console.log(typeof decimalnumber);

const num1=15;
const num2=15;
const result= num1 + num2;
const result1= num1 - num2;
const result2= num1 * num2;
const result3= num1 / name1;

console.log(`Addition of two numbers ${result},
Subtrcation of two numbers ${result1},
multiplication of two numbers ${result2},
${result3}`)

//Booleans(True False)
const isCool = true;
console.log(typeof isCool)
if(isCool){
    console.log("Today is very cool")
}else{
    console.log('Hello!!!')
}

const age=20;
console.log(age>18)
console.log(age<18)

//null (Js never sets a value to null )
const a=null
console.log(a)
console.log( 'type of null is object=>',typeof a)

//Undefined
let x;
console.log(x)
console.log( typeof x)

//Object 
//all other are primitive bcoz it contains only one value 
//Objects are used to more collections of data
 const name="krishna";
 const branch='CSE';
 const college = 'JNTUHUCEJ';

 const student = {
    name:"krishna",
    branch:'CSE',
    college:'JNTUHUCEJ'
}
 
console.log(student)
//For individual prop we use DOT notation
console.log(student.name)
console.log(typeof student)
console.log(typeof student.name)

//Arrays
const arr=[1,2,3,4,5]
console.log(arr)
console.log('type of array is=>',typeof arr)

//Date
const date =new Date()
console.log(date)
console.log('Type of Date is=>', typeof date)

//Statically typed
let message ='Helloworld!'
console.log(message)

message= 15;
console.log(message)

//operators (same as in 'C')
//Logic and Control Flow
const age1 = 18;
if(age1> 18){
    console.log('You may enter!')
}else if(age1==18){
    console.log('You just turned 18')
}else{
    console.log('Grow Up!')
}
//While Loop

let i =0;
while(i<10){
    console.log(i)
    i++
}

//For Loop
for(let j=0;j < 10; j++){
    console.log('j=',j)
}

//Functions
//function declaration
function square(num){
    console.log(`number is ${num}`)
    return num * num;
    console.log(`number is ${num}`)
    //after return stmt it doesn't care about any other stmsts
}
//function call

const mul = square(6);
console.log(`Square is=>`,mul)

function sayHi(name){
    console.log(`Hi,${name}`)
}

sayHi('krishna')

//Arrow Function
const add =(a,b)=>{
    return a+b;
}
const add_result = (5,9);
console.log(add_result)