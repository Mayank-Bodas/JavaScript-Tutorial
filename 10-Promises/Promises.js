const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is compeleted');
        resolve() // we are calling resolve tp use .then() method
    },1000)
})
// In above case we have created the promise but to consume the promise we need to use then() which is directly assosiated to the resolve also we have to call resolve() for consumption
promiseOne.then(function(){
    console.log("Promise Consumed")
})

//Efficient way of creating promises without using any variable and also using then connect to promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 Consumed")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Chai',email:'chai@example.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = true;
    if(!error){
        resolve({username:"Mayank",password:"123"})
    }else{
        reject("ERROR")}
    },1000)
})

promiseFour
.then((user)=>{
  return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{console.log("The promise is either resolved or rejected")}) // this will always gets executed 



const promiseFive = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = true;
    if(!error){
        resolve({username:"Javascript",password:"ABC"})
    }else{
        reject("ERROR:JS went wrong")}
    },1000)
})


//consuming promises with async await

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


//Fetch() using async await 
async function getAllUsers(){
    try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users')
          const data = await response.json()
          console.log(data);
    } catch (error) {
        console.log("E:",error)
    }
}

getAllUsers();
//Fetch() using .then() .catch()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{console.log(error)})
