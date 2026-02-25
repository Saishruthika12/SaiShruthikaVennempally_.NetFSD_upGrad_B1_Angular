let cart = [
  { id: 1, product: "Laptop", price: 60000, qty: 1 },
  { id: 2, product: "Headphones", price: 2000, qty: 2 },
  { id: 3, product: "Mouse", price: 800, qty: 1 }
];
let totalValue = cart.reduce((total, item) => total + item.price * item.qty, 0);
console.log("Total Cart Value: ₹", totalValue);
function increaseQty(id, amount = 1) {
    cart = cart.map(item => 
        item.id === id ? { ...item, qty: item.qty + amount } : item
    );
}
increaseQty(2, 1); 
console.log("Updated Cart:", cart);
function removeProduct(id) {
    cart = cart.filter(item => item.id !== id);
}
removeProduct(3);
console.log("Cart after removal:", cart);
cart = cart.map(item => 
    item.price > 10000 ? { ...item, price: item.price * 0.9 } : item
);
console.log("Cart after discount:", cart);
cart.sort((a, b) => (b.price * b.qty) - (a.price * a.qty));
console.log("Cart sorted by total item price:", cart);
let expensiveItemExists = cart.some(item => item.price > 50000);
console.log("Any item above ₹50,000:", expensiveItemExists);
let allInStock = cart.every(item => item.qty > 0);
console.log("All items in stock:", allInStock);
let invoice = cart.map(item => ({
    Product: item.product,
    UnitPrice: item.price,
    Quantity: item.qty,
    Total: item.price * item.qty
}));
console.table(invoice);
let mostExpensive = cart.reduce((prev, curr) => curr.price > prev.price ? curr : prev, cart[0]);
console.log("Most expensive product:", mostExpensive);
let totalWithGST = totalValue * 1.18;
console.log("Total with 18% GST: ₹", totalWithGST.toFixed(2));