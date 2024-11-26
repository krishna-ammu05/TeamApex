interface User {
    readonly dbId:number
    email : string,
    userId :number,
    googleId?:string,
    startTrail:()=>string
    getCoupon (couponname :string,value:number ):number
}
//reopening of the interface
interface User{
    githubToken :string
}

interface Admin extends User {
    role:"admin"|"ta"|"learner"
}
const krishna:User={dbId:99, email: "bDJjh",
    userId :243,githubToken:"github",
startTrail:()=> {
    return "trail started"
},
getCoupon:(name : "krishna",off:10)=>{
    return 10
}
}

interface Person {
    firstName: string;
    lastName: string;
  }
   
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
   
  let user = { firstName: "Jane", lastName: "User" };
   
  document.body.textContent = greeter(user);

export{}