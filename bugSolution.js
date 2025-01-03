function foo(a, b) {
  if (b === 0) {
    return a;
  } else {
    return foo(b, a % b);
  }
}

console.log(foo(12, 18)); // Output: 6
console.log(foo(12,17)); //Output:1