// {Recursion-3}
function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1);
  } else {
    return n;
  }
}