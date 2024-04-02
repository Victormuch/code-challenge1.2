// This is a program that changes the case of letters git 
function change(letter) {
  return letter
  // We spit the string will help us to access the letters
  // The .map helps us to iterate through each character of the array since we had split it 
    .split("").map((word) => {
      // We use the if condition to check if the letter is in uppercase is should be changed to lowercase
      if (word === word.toUpperCase()) {
        return word.toLowerCase();
      } else if (word === word.toLowerCase()) {
        return word.toUpperCase();
      } else {
        // If the letter is neither uppercase or lowercase it should remain the same.
        return word;
      }
      // We join the strings after being processed
    }).join("");
}
// result 
console.log(change("The Quick Brown Fox "));
