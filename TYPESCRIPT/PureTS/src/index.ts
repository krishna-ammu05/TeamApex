// class User {
//     public email :string
//     private name:string
//     city :string =""
//     constructor (email :string,name: string ){
//         this.email =email;
//         this.name = name
//     }
// }

class User {

    protected _courseCount = 1
    
    city :string =""
    constructor (
        public email :string,
        public name:string,
        // privtae uerId = string
    ){
    }
    private deleteToken(){
        console.log("Token deleted")
    }
    get getAppleEmail():string{
        return `apple ${this.email}`
    }
    get courseCount ():number{
        return this._courseCount
    }
    //in setter should not return type
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error ("Course count should be more than 1")
        }
        this._courseCount= courseNum
    }
}
//it will acqurie all the properties of parent expect privte one
class SubUser extends User{
    isFamily :boolean = true
    changeCourseCount (){
        this._courseCount = 4
    }
}
const krishna = new User("krish@gmail.com","krish")
krishna.city = "HYD";
 