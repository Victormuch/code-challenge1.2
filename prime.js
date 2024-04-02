// This is a program that filters prime numbers from other numbers
function primeNum(numbers) {
// We create an empy array to hold the prime numbers
  let emptyArray = [];
// We create a loop to that iterates over each number from 2 since it is the smallest prime number 
  for (let i = 2; i < numbers.length; i++) {
    let prime = true;
// We ccreate another loop that checks if i is divisible by any other number apart from 1    
    for (let j = 2; j < i; j++) {
// We use the if condition to check if 1 is divided by j the remainder is zero its not a prime number since 
//prime numbers have remainders      
      if (i % j === 0) {
        prime = false;
// hence the inner loop should be terminated using key word break        
        break;
      }
    }
    if (prime) {
// If prime is true the numbers should be pushed to emptyArray to be contained       
      emptyArray.push(i);
    }
  }
  return emptyArray;
}
// We test the solution 
console.log(primeNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
