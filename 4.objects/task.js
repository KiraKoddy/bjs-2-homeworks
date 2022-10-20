function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let kira = new Student("Кира", "женский", 18);
let sasha = new Student("Саша", "мужской", 22);
let vanya = new Student("Ваня", "мужской", 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = marks;
  } else {
    this.marks = this.marks.concat(...marks);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  if (this.marks === undefined) {
    return "Нет оценок"
  } else {
    for (i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    this.average = sum / this.marks.length;
    return this.average;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}