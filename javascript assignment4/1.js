
let books = [
  { id: 1, title: "JavaScript Basics", price: 450, stock: 10 },
  { id: 2, title: "React Guide", price: 650, stock: 5 },
  { id: 3, title: "Node.js Mastery", price: 550, stock: 8 },
  { id: 4, title: "CSS Complete", price: 300, stock: 12 }
];
let bookTitles = books.map(book => book.title);
console.log("All Book Titles:", bookTitles);
let totalValue = books.reduce((total, book) => total + (book.price * book.stock), 0);
console.log("Total Inventory Value:", totalValue);
let expensiveBooks = books.filter(book => book.price > 500);
console.log("Books above ₹500:", expensiveBooks);
let updatedBooks = books.map(book => ({ ...book, price: Math.round(book.price * 1.05) }));
console.log("Books after 5% price increase:", updatedBooks);
let sortedBooks = [...books].sort((a, b) => a.price - b.price);
console.log("Books sorted by price (low → high):", sortedBooks);
let bookIdToRemove = 3;
let booksAfterRemoval = books.filter(book => book.id !== bookIdToRemove);
console.log(`Books after removing ID ${bookIdToRemove}:`, booksAfterRemoval);
let anyOutOfStock = books.some(book => book.stock === 0);
console.log("Is any book out of stock?", anyOutOfStock);
let groupedBooks = {
  cheap: books.filter(book => book.price < 400),
  medium: books.filter(book => book.price >= 400 && book.price <= 600),
  expensive: books.filter(book => book.price > 600)
};
console.log("Grouped Books by Price Range:", groupedBooks);
let discountedBooks = books.map(book => book.price > 600 
  ? { ...book, price: Math.round(book.price * 0.9) } 
  : book
);
console.log("Books after discount for price > 600:", discountedBooks);
let invoice = books.map(book => `${book.title} - ₹${book.price}`).join("\n");
console.log("Invoice:\n" + invoice);