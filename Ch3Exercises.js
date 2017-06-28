//Minimum

// Your code here.
function min(x, y) {
  if (x > y)
    return y
  else
    return x
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



//Recursion

// Your code here.
function isEven(number) {
  if (number < 0) //if input number is negative...
    number = Math.abs(number); //Take absolute value so we don't enter an infinite function call loop
  
  if (number === 0)
    return true;
  else if (number === 1)
    return false;
  else //Keep taking number - 2. Eventually, will yield 0 or 1.
    return isEven(number - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??



//Bean Counting

// Your code here.
function countBs(string){
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B") {
      count +=1; 
    }
  }
  return count;
}

function countChar(string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      count +=1;
    }
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4