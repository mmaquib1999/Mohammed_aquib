function generateOddSeriesUntilPreviousOdd(a) {
  
  const count = a % 2 === 0 ? a - 1 : a;
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }

  return result;
}

//output
console.log(generateOddSeriesUntilPreviousOdd(1)); // [1]
console.log(generateOddSeriesUntilPreviousOdd(2)); // [1]
console.log(generateOddSeriesUntilPreviousOdd(3)); // [1, 3, 5]
console.log(generateOddSeriesUntilPreviousOdd(4)); // [1, 3, 5]
console.log(generateOddSeriesUntilPreviousOdd(5)); // [1, 3, 5, 7, 9]
