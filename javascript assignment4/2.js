let students = [
  { name: "Akhil", marks: 85 },
  { name: "Priya", marks: 72 },
  { name: "Ravi", marks: 90 },
  { name: "Meena", marks: 45 },
  { name: "Karan", marks: 30 }
];
let passedStudents = students.filter(student => student.marks >= 40);
console.log("Passed Students:", passedStudents);
let distinctionStudents = students.filter(student => student.marks >= 85);
console.log("Distinction Students:", distinctionStudents);
let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
let classAverage = totalMarks / students.length;
console.log("Class Average:", classAverage);
let topper = students.reduce((max, student) => (student.marks > max.marks ? student : max), students[0]);
console.log("Topper:", topper);
let failedCount = students.filter(student => student.marks < 40).length;
console.log("Failed Students Count:", failedCount);
let studentsWithGrades = students.map(student => {
  let grade;
  if (student.marks >= 85) grade = 'A';
  else if (student.marks >= 70) grade = 'B';
  else if (student.marks >= 40) grade = 'C';
  else grade = 'Fail';
  
  return { ...student, grade };
});
console.log("Students with Grades:", studentsWithGrades);
let leaderboard = [...students].sort((a, b) => b.marks - a.marks)
  .map((student, index) => ({ ...student, rank: index + 1 }));
console.log("Leaderboard with Ranks:", leaderboard);
let withoutLowest = [...students].sort((a, b) => a.marks - b.marks).slice(1);
console.log("After Removing Lowest Scorer:", withoutLowest);
let sortedLeaderboard = [...students].sort((a, b) => b.marks - a.marks);
console.log("Leaderboard Sorted by Marks:", sortedLeaderboard);