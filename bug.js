function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; 
  }
  return a / b; 
}

console.log(foo(1, 0)); // Throws an error, but it's better to return a specific value for this case
console.log(foo(0, 1)); // Throws an error, but it's better to return a specific value for this case