// this is a program that filters prime numbers from other numbers
function primeNum(numbers) {
    // we create an empy array to hold the prime numbers
  let emptyArray = [];
  for (let i = 2; i < numbers.length; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      emptyArray.push(i);
    }
  }
  return emptyArray;
}
console.log(primeNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
