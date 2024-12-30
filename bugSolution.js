function foo(a, b) {
  // Check if both inputs are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    // Handle non-number inputs appropriately (throw error, return default, etc.)
    return NaN; //Or throw an error
  }
}
console.log(foo(1, "1")); //Output: NaN
console.log(foo(1, 1)); //Output: 2