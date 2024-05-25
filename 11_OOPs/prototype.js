// let myName = "Mayank       ";

// console.log(myName.truelength); 

let myHeros = ['thor','spiderman']

let power = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPwer:()=>{
        console.log(`Spidy power is${this.spiderman}`)
    }
}

Object.prototype.mayank = ()=>{
    console.log("mayank is present in all object")
}

Array.prototype.himayank = ()=>{
    console.log("hi from mayank");
}

// myHeros.mayank();
// myHeros.himayank();


//Inheritance
// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Mayank".trueLength()
"iceTea".trueLength()

