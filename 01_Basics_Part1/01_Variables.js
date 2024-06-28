const accountId = 8127146
let accountEmail = "usman@gmail.com"
var accountPassword = "12345"

accountId = "Karachi"
accountEmail = "nasir@gmail.com"
accountPassword = "678910"
accountId = "Lahore"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountId);

console.table ([accountEmail, accountId, accountPassword, accountId]);