function generateOddSeries(a) {
  
  const count = a % 2 === 0 ? a - 1 : a;
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }

  return result;
}

//output
console.log(generateOddSeries(1)); // [1]
console.log(generateOddSeries(2)); // [1]
console.log(generateOddSeries(3)); // [1, 3, 5]
console.log(generateOddSeries(4)); // [1, 3, 5]
console.log(generateOddSeries(5)); // [1, 3, 5, 7, 9]
