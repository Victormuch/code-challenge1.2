// this is a program that changes the case of letters git 
function change(letter) {
  return letter
  // we spit the string will help us to access the letters
    .split("").map((word) => {
      if (word === word.toUpperCase()) {
        return word.toLowerCase();
      } else if (word === word.toLowerCase()) {
        return word.toUpperCase();
      } else {
        return word;
      }
      // we join the strings
    }).join("");
}
console.log(change("The Quick Brown Fox "));
