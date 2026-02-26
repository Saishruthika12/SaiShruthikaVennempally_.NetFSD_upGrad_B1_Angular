class Bankaccount{
    constructor(accountHolder,balance){
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
    deposit(amount){
        this.balance=this.balance+amount;
        console.log(amount + "money is deposited");
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("insufficient balance");
        }
        else{
            console.log(amount + "amount is withdrawn succesfully");
        }
    }
    checkBalance(){
        console.log(this.balance  + "is the current balance");
    }
}
let account1=new Bankaccount("sai",40000);
account1.deposit(2000);
account1.withdraw(50000);
account1.checkBalance();