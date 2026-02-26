class Wallet {

  #balance = 0;   // Private field

  addMoney(amount) {
    this.#balance += amount;
  }

  spendMoney(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

let myWallet = new Wallet();

myWallet.addMoney(1000);
myWallet.spendMoney(300);

console.log(myWallet.getBalance()); 
