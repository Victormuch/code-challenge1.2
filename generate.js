// this is a program that generates numbers in between other numbers
function new1(forward, back) {
  // we put an empty array to hold the generated numbers
  let one = [];
  // math.sign calculates the sign of the difference between back and forword
  let method = Math.sign(back - forward);
  // we initialize u with the value of forward to make work easier
  let u = forward;
  // We create a loop to follow the following condition
  while (u <= back) {
  // The current value of u is pushed to the empty array one which will hold the numbers  
    one.push(u);
    u += method;
  }
  return one;
}
// results 
console.log(new1(1, 20));
