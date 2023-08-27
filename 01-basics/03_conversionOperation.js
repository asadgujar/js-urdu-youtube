let score = true

// console.log(typeof score)
// console.log(typeof (score))

let validNumber = Number(score)
    // console.log(validNumber)
    // console.log(typeof validNumber)



// Notes
// Nmber conversion 
// "22" => 22
// "22abc" => NaN not a number but type number 
// true => 1 false => 0
// undefined => NaN but type number


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);


// boolean conversion 

// 1 => true ; 0 => flase 
// "sdfd" => true ; "" => false  but type is boolean
// undefined => false or null=>false  but type is boolean


// string conversion 

let stringValue = 33
let converSrringValue = String(stringValue)
console.log(converSrringValue);
console.log(typeof converSrringValue);


// Check validation and validity is true then set value otherwise show message this is not a number

// if (!isNaN(Number(score))) {
//     let validNumber = validNumber;
//     console.log('Conversion to number was successful');
//     console.log('Valid number:', validNumber);
//     console.log(typeof validNumber)
//   } else {
//     console.log('Conversion to number was not successful');
//     console.log(validNumber)
//   }