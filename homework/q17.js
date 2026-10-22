let str = "Never odd or even";

str = str.toLowerCase();
str = str.replaceAll(" ", "");

let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
reverse = reverse + str[i];
}

if (str == reverse) {
console.log("Palindrome");
} else {
console.log("Not Palindrome");
}
