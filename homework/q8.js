let n = 1221;
let original = n;
let reverse = 0;

while (n > 0) {
let digit = n % 10;
reverse = reverse * 10 + digit;
n = Math.floor(n / 10);
}

if (original == reverse) {
console.log("Palindrome");
} else {
console.log("Not Palindrome");
}
