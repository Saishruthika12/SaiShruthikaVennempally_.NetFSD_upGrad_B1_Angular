class Student {
  constructor(name) {
    this.name = name;
    this.marks = [];
  }

  addMark(mark) {
    this.marks.push(mark);
    console.log(mark + " added.");
  }

  getAverage() {
    if (this.marks.length === 0) {
      console.log("No marks available.");
      return 0;
    }

    let total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  getGrade() {
    let avg = this.getAverage();

    if (avg >= 90) {
      console.log("Grade: A");
    } else if (avg >= 75) {
      console.log("Grade: B");
    } else if (avg >= 50) {
      console.log("Grade: C");
    } else {
      console.log("Grade: Fail");
    }
  }
}
let s1 = new Student("Anita");
s1.addMark(85);
s1.addMark(90);
s1.addMark(88);
console.log("Average:", s1.getAverage());
s1.getGrade();