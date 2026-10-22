let n = 153;
let original = n;
let temp = n;
let count = 0;
let sum = 0;

while (temp > 0) {
count++;
temp = Math.floor(temp / 10);
}

temp = n;

while (temp > 0) {
let digit = temp % 10;
sum = sum + digit ** count;
temp = Math.floor(temp / 10);
}

if (sum == original) {
console.log("Armstrong");
} else {
console.log("Not Armstrong");
}
