console.log("factorial of 100 is ", factorial(100));

function factorial(number) {
  for (var i = number - 1; i >= 1; i--) number *= i;
  return number;
}
