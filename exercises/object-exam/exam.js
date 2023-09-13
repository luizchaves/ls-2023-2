class Exam {
  constructor(weight, answer) {
    this.weight = weight;
    this.answer = answer;
    this.exams = [];
  }

  add(exam) {
    this.exams.push(exam);
  }

  avg() {
    const total = this.exams
      .map((exam) =>
        exam.reduce(
          (acc, value, i) =>
            acc + (value === this.answer[i] ? this.weight[i] : 0),
          0
        )
      )
      .reduce((acc, value) => acc + value, 0);
    return total / this.exams.length;
  }
}

const exam = new Exam([2, 2, 2], ['a', 'a', 'a']);

exam.add(['a', 'a', 'b']);
exam.add(['a', 'a', 'a']);
exam.add(['c', 'a', 'a']);

console.log(exam.avg());
