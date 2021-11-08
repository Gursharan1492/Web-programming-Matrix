var str1 = "  Welcome to Web Programming course  ";
console.log("length is =", str1.length);
str1 = str1.trim();
console.log("after trim: ", str1);
console.log("upper case string:", str1.toUpperCase());
console.log("index 4 to +8 characters:", str1.substr(4, 8));
console.log("retrieving web:", str1.substring(12, 14));
console.log(
  "replacing Programming with Development:",
  str1.replace("Programming", "Development")
);
