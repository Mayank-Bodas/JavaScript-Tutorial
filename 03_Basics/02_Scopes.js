//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "mayank"

    function two(){
        const website = "youtube"
        console.log(username);// This will get print as two comes under one and one the global scope for two 
    }
    // console.log(website); // but here we will not be able to get the website as it is beyond the scope of website
     two()

}

// one()

if (true) {
    const username = "mayank"
    if (username === "mayank") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){ // in this syntax we cannot hoist the function 
    return num + 2
}