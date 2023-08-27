const accountId = 123212321;
let accountEmail = 'Asad@google.com';
var accountPassword = '21322';
accountCity = 'lahore'; // do use of this type variable declaration
let accountState; 

// value again assign and investigation process what will happed

// accountId = 3;  // Not allowed to chane const value

/* 
    prefer not use to var because of issue in block scope and functionla scope
*/

accountEmail = 'ai@ai.com';
accountPassword = '2121212';
accountCity = 'Faisalabad';

console.table([accountEmail, accountPassword, accountCity, accountState]);

console.log(accountId);