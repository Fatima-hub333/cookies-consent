class MyBook extends Book {
  constructor(
    title, author, price
  ) {
    super(title, author);
    this.price = price;
  }

  display() {
    const obj = {
      Title: this.title,
      Author: this.author,
      Price: this.price
    }
    for (const [key, value] of Object.entries(obj)) {
      console.log(`${key}: ${value}`);
    }
  }
}