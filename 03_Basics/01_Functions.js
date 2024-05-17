function sayMyName(){
   // console.log("Mayank");
}
//sayMyName();

// function add(number1,number2){
//     console.log(number1+number2);
// }

function add(number1,number2){
    // let result = number1+number2
    // return result
    return number1+number2
}

//add(2,4)

// const result = add(3,5)
// console.log(result); // it returns undefined as a number because consoling dies not equals to returning 

function loginUser(username){
    return `${username } just logged in`
}

const message = loginUser("Mayank");
// console.log(message);


function calcCartPrice(...num1){ //... is rest operator we use this we have declared a single parameter but sending multiple 
    return num1
}

// console.log(calcCartPrice(200,300,400));

const user = {
    username:"Mayank",
    price:200
}
//Handling objects in functions
// function handleObject(anyobject){
//     console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user)

//Handling array in functions

const myNewArray = [100,200,300]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(myNewArray);


