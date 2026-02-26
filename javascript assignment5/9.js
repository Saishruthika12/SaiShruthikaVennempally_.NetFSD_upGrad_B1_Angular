class Product {

  constructor({ name, price, category = "General" }) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  getDetails = () => {
    return `Product: ${this.name} | Price: ₹${this.price} | Category: ${this.category}`;
  };

  cloneWithChanges = (changes) => {
    return new Product({ ...this, ...changes });
  };
}
const p1 = new Product({
  name: "Laptop",
  price: 60000
});

console.log(p1.getDetails());
const p2 = p1.cloneWithChanges({
  price: 55000,
  category: "Electronics"
});

console.log(p2.getDetails());