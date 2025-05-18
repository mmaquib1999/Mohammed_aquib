function generateOddSeriesUntilPreviousOdd(a) {

  const result = [];

  let count;
  if (a % 2 === 0) {
    count = a - 1;
  } else {
    count = a;
  }
  
  for (let i = 0; i < count; i++) {
    let oddNumber = 2 * i + 1;
    result.push(oddNumber);
  }

  return result;
}

//output
console.log(generateOddSeriesUntilPreviousOdd(1)); // [1]
console.log(generateOddSeriesUntilPreviousOdd(2)); // [1]
console.log(generateOddSeriesUntilPreviousOdd(3)); // [1, 3, 5]
console.log(generateOddSeriesUntilPreviousOdd(4)); // [1, 3, 5]
console.log(generateOddSeriesUntilPreviousOdd(5)); // [1, 3, 5, 7, 9]
