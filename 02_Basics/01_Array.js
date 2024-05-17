const myArr = [1,2,3,4,5];
const myName = ['mayank','pratibha'];
const arr = new Array(1,2,3,4);

//console.log(myArr[1]);

//Array Methods

// myArr.push(6);
// myArr.pop();

// myArr.unshift(0); // it add in the first index 
// myArr.shift();// pops out from first index

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(1));

// const newArr = myArr.join() // converts array to string 
// console.log(myArr);
// console.log(newArr);

// Slice and Splice
// Slics we don't include the ending index but in splice we does and also splics make direct changes to original array but slice does not 

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
