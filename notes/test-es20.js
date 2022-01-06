const undef = undefined;
console.log(undef || 1); // 1

const zero = 0;
console.log(zero || 1); // 1

console.log(zero ?? 1); // 0
console.log(NaN ?? 1); // NaN

// coalescing operator returns its right-hand side operand when its left-hand side operand is null or undefined