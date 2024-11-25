function addTwo(num:number){
    // return num+2
    return "hello"
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string,email:string,
    isPaid:boolean){

}
let loginUser =(name:string,email:string,
    ispaid:boolean = false)=>{}
let myValue = addTwo(5)
getUpper("hi")

signUpUser("krish","krish@gmail.com",false)
loginUser("k","h@h.com")

// function getValue(myVal : number):boolean{
//     if(myVal >5){
//         return true
//     }
//     return "200 ok"
// }

const getHello = (s:string):string =>{
    return ""
}

const names = ["krish" ,"jay" ,"Golu"]
// const names = [1,2,3]
names.map(name =>{
    return `name is ${name}`
})

function consoleError(errmsg: string) : void{
    console.log(errmsg);
}

function handleError(errmsg: string) :never{
    throw new Error (errmsg);

}
    export{}