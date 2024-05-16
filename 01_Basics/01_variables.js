const accountId = 261199
let accountName = "mayank.bodas@gmail.com"
var accPassword = "mayank"
accoutCity = "Pune" // not reccomended
let accountState;
//accountId = 2; Not allowed

accountName = "m@m.com"
accPassword = "12121212"
accountCity = "Dhar"

console.log(accountId);

/*Prefer not to use var because of block scope and functional scope*/ 
console.table([accoutCity,accPassword,accountName,accountState]);