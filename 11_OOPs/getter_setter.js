class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}mayank`
    }

    set password(value){
        this._password = value
    }
}

const mayank = new User("h@mayank.ai", "abc")
console.log(mayank.email);