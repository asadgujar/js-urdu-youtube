// Primitive  type"string value "
// 7 types: string , number , bigInt, null , undefined , symbol, boolean
let stringValue = "string value "
let numberValue = 322323
let bigNumberValue = 22222222222222222222222222n
let nullValue =null
let undefinedValue  // ko two ways se likh saktye hia without initalization and initialization k sth  ko value type kahtye hia q k yeh value return krtye hia 

let undefinedValue2 = undefined
let booleanValue = true
let symbolValueId = Symbol('323');  // yeh unique value k liyea istemal krtye hia 
let symbolValueId2 = Symbol('323');  // yeh unique value k liyea istemal krtye hia 

// console.log(symbolValueId === symbolValueId2);

// non-primitive ko reference data type kahtye hia

// Array , function object


const stringArray = ["Asad ilays", '23', 'software enginer']
// console.log(stringArray);

let personObj = {
    name:'Asad',
    age:23
}

// console.log(personObj);

const myFunction = function printName(){
    console.log("Asad");
}
// console.log( myFunction)

// +++++++++++++++++++ Stack and Heap ++++++++++++++++++


// Stack (primative) , Heap (Non-Primative)  Data Types

 let myYoutubeName = "MuhammadAsadIlyas";
 let anotherName = myYoutubeName;

 anotherName = 'TaDeveloper';

 console.log(myYoutubeName);
 console.log(anotherName);

 let user = {
    email:"user@google.com",
    uid:"1221dfdsfds"
 }

let userTwo = user;

userTwo.email = 'asadilyas@gmail.com';

console.log(user, userTwo);











