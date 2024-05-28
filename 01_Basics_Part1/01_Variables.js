const accountId = 8127146
let accountEmail = "usman@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"

accountEmail = "nasir@gmail.com"
accountPassword = "678910"
accountCity = "Lahore"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table ([accountEmail, accountId, accountPassword, accountCity]);