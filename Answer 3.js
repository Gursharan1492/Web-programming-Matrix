console.log("largest of 5555,343564,123 is ", getBiggest(5555, 343564, 123));

function getBiggest(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) return number1;
  else if (number2 > number3 && number2 > number1) return number2;
  else return number3;
}
