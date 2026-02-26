
class Payment {
  pay(amount) {
    console.log("Processing payment of " + amount);
  }
}

class CreditCardPayment extends Payment {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  pay(amount) {
    console.log("Paid " + amount + " using Credit Card: " + this.cardNumber);
  }
}


class UPIPayment extends Payment {
  constructor(upiId) {
    super();
    this.upiId = upiId;
  }

  pay(amount) {
    console.log("Paid " + amount + " using UPI ID: " + this.upiId);
  }
}

class CashPayment extends Payment {
  pay(amount) {
    console.log("Paid " + amount + " using Cash.");
  }
}


let payments = [
  new CreditCardPayment("1234-5678-9999"),
  new UPIPayment("sai@upi"),
  new CashPayment()
];

for (let payment of payments) {
  payment.pay(1000);
}