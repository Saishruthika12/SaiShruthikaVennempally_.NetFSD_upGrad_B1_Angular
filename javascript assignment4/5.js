let numbers = [10, 20, 30, 10, 40, 20, 50, 60, 60];
let uniqueNumbers = [...new Set(numbers)];
console.log("Unique Numbers:", uniqueNumbers);
let secondLargest = [...uniqueNumbers].sort((a, b) => b - a)[1];
console.log("Second Largest Number:", secondLargest);
let frequency = numbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
console.log("Frequency:", frequency);
let firstNonRepeating = numbers.find(num => frequency[num] === 1);
console.log("First Non-Repeating Number:", firstNonRepeating);
let rotateBy = 2;
let rotated = [...numbers.slice(rotateBy), ...numbers.slice(0, rotateBy)];
console.log(`Array rotated by ${rotateBy}:`, rotated);
let nested = [1, 2, [3, 4, [5]]];
let flatten = nested.flat(Infinity);
console.log("Flattened Array:", flatten);
let arr = [1, 2, 3, 5, 6];
let n = Math.max(...arr);
let missing = [];
for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) missing.push(i);
}
console.log("Missing Number(s):", missing);