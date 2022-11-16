// [Exceptions - String to Integer]

console.log(isNaN(S) ? "Bad String" : S);

// [More Exceptions]

class Calculator {
  power(n, p) {
    if (n < 0 || p < 0) {
      throw ("n and p should be non-negative");
    }
    return Math.pow(n, p);
  }
}