const sum = (a, b) => {
  return a + b;
};

const sumInline = (a, b) => a + b; // inline arrow fn

console.log(sum(1, 3)); // 4
console.log(sumInline(1, 3)); // 4