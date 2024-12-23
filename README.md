# Unhandled Division by Zero in JavaScript

This repository demonstrates a common error in JavaScript: unhandled division by zero. The `foo` function does not correctly handle cases where either `a` or `b` is zero, resulting in an error.  The solution provides a more robust implementation that handles this edge case gracefully. 

## Bug
The original `foo` function throws an error when either `a` or `b` is zero. This is unexpected behavior in many cases, and makes the function unreliable. 

## Solution
The solution modifies the `foo` function to explicitly check for division by zero.  If either `a` or `b` is zero, it returns a more appropriate value (e.g., `0`, `NaN`, or `Infinity`) instead of throwing an error. This makes the function more robust and predictable.