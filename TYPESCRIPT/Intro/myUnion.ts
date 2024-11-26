let score :number |string = 55
score =44
score = "55"

// function printId(id: number | string) {
//     console.log("Your ID is: " + id);
//   }
//   // OK
//   printId(101);
//   // OK
//   printId("202");
  // Error
function printId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }
function printTextOrNumberOrBool(
    textOrNumberOrBool:
      | string
      | number
      | boolean
  ) {
    console.log(textOrNumberOrBool);
  }

  type User ={
    name:string;
    id:number
  }

  type Admin ={
    usernmae:string;
    id:number
  }
  let details :User |Admin={name: "krish", id:555}
  details ={usernmae:"hk",id:334}

  function getDbId(id:number|string){
    console.log(`DB ID is :${id}`);
  }
  getDbId(3)
  getDbId("3")

  //Array
  const data : number[]=[1,2,3]
  const data1 : string[]=["apple","mango","banana"]
  const data2 :( string|number)[]=[1,"8",2,3]
  console.log(data1)
  console.log(data2)


let seatAllotment : "aisle"|"middle"|"window"
seatAllotment="aisle"

export{}