function foo(a, b) {
  if (b === 0) {
    return Infinity; // Or 0, NaN, or throw a custom error
  } else if (a === 0) {
    return 0;
  }
  return a / b; 
}

console.log(foo(1, 0)); // Infinity
console.log(foo(0, 1)); // 0
console.log(foo(10, 2)); // 5