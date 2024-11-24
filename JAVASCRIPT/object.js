var student = {
    name:  "Krishna",
    rollno: 539,
    branch :"CSE"
};
//updating prop of the objects
student['marks']= '1000'
student['email']="hjgfhkua"
console.log(student)

//delete prop from an object
delete student.email
console.log(student)

//Using objcts for Look ups
function phoneticLookup(val){
    var result =" ";

    var lookup = {
        "abhi":"manthini",
        "jayan":"HYD",
        "golu":"MM",
        "krishna":"FBSSS",
        "vidya":"KNR"
    }
    result = lookup  [val];
    return result;
}
console.log(phoneticLookup("golu"))

//Testing objects for propertiess 
 var myObj = {
    gift:"pony",
    pet:"kitten",
    bed:"sljhsjh"
 };
 function checkObj(checkProp){

    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
     }else{
        return "Not Found"
     }

 }
 console.log(checkObj("gfhg"))
 console.log(checkObj("gift"))

 //Manipulating Complex Obkects
  var myMusic = [
    {
        artist:"hkjz",
        title:"piano Man",
        release_year:2004,
        formats:["CD","8T","LP"],
        gold:true 
       },
       {
        artist:"fjdzhiu",
        title:"piano Mans",
        release_year:2008,
        formats:["CD","8T","LP"],
        gold:true 
       }
  ];
  console.log(myMusic)

var collection ={
    "539":{
        name :"ammu",
        rollno:39,
        marks:[30,28,30,29],
        branch:"CSE"
    },
    "538":{
        name :"mani",
        rollno:38,
        marks:[27,28,25,26],
        branch:"CSE"
    },
    "540":{
        name :"Hari",
        rollno:40,
        marks:[30,28,25,26],
        branch:"CSE"
    }
};
console.log(collection)

var collectionCopy = JSON.parse(JSON.stringify(collection));

  function updateRecords(id, prop, value){
    if(value ===""){
        delete collection[id][prop];
    }else  if(prop === "marks"){
        collection[id][prop]=collection[id][prop]||[];
        collection[id][prop] = value;
    }else{
        collection[id][prop] = value
    }
    return collection;

  }
//   console.log(collection)
updateRecords(539,"marks",'30')
  console.log(updateRecords(540,"name","Golu"))


var contacts= [
    {
        firstName:"ammu",
        lastName:"krishna",
        number:7989893877,
        likes:["pizza","coding","chess"]
    },
    {
        firstName:"abhi",
        lastName:"Buchi",
        number:8367243706,
        likes:["music","coding","chess"]
    },
    {
        firstName:"Golu",
        lastName:"Ejjigiri",
        number:7989898007,
        likes:["cakes","playing","chess"]
    },
    {
        firstName:"srividya",
        lastName:"samudrala",
        number:7989879890,
        likes:["music","coding","chess"]
    },
];
console.log(contacts)
function lookUpProfile(name,prop){
    for(var i=0;i< contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property"
        }
    }
    return "no such Contacts"
}
var data = lookUpProfile("abhi","likes");
console.log (data)


//Use parseInt
function convertToInteger(str){
    return parseInt(str,2)
}
console.log(convertToInteger("10011"))

//ternary operator
function checkEqual(a,b){
    return a===b ? true :false;
    return a===b;
}
console.log(checkEqual(1,2))
console.log(checkEqual(1,1))

function checkSign(num){
    return num>0 ? "positive" : num<0 ? "negative" : "zero"
}
console.log(checkSign(9))
console.log(checkSign(0))
console.log(checkSign(-9))