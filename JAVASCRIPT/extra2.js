class Student {
  constructor(name, roll, marks) {
    this.name = name;
    this.roll = roll;
    this.marks = marks;
  }
  display() {
    console.log("Name: " + this.name);
    console.log("Roll No: " + this.roll);
    console.log("Marks: " + this.marks);
  }
}

let s1 = new Student("Rahul", 101, 85);
let s2 = new Student("Anita", 102, 90);

s1.display();
s2.display();
