class User {

  constructor(password) {
    this._password = password;
  }

  set password(newPassword) {
    if (newPassword.length >= 6) {
      this._password = newPassword;
    } else {
      console.log("Password must be at least 6 characters");
    }
  }
  get password() {
    return this._password;
  }

}
let user1 = new User("123456");

console.log(user1.password);   

user1.password = "123";       
user1.password = "abcdef";    

console.log(user1.password);   