class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    
    //we use static keyword to limit the use of functions and classes 
    static createId(){
        return `123`
    }
}

const Mayank = new User("Mayank")
console.log(Mayank.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());