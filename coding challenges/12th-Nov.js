class Student extends Person {
  constructor(
    firstName,
    lastName,
    identification,
    scores
  ) {
    super(
      firstName,
      lastName,
      identification
    );
    this.scores = scores;
  }

  calculate() {
    let sum = this.scores.reduce((pre, next) => {
      return pre + next
    }, 0)

    const averageScore = sum / this.scores.length;
    switch (true) {
      case averageScore >= 90 && averageScore <= 100:
        return '0';
        break;
      case averageScore >= 80 && averageScore < 90:
        return 'E';
        break;
      case averageScore >= 70 && averageScore < 80:
        return 'A';
        break;
      case averageScore >= 55 && averageScore < 70:
        return 'P';
        break;
      case averageScore >= 40 && averageScore < 50:
        return 'D';
        break;
      default:
        return 'T';
    }
  }
}