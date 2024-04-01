// this is a program that generates numbers in between other numbers
function new1(forward, back) {
  // we put an empty array to hold the generated numbers
  let one = [];
  let method = Math.sign(back - forward);
  let two = forward;
  while (two <= back) {
    one.push(two);
    two += method;
  }
  return one;
}
console.log(new1(1, 20));
