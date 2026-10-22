let n = 17;
let prime = true;

if (n <= 1) {
prime = false;
} else {
for (let i = 2; i < n; i++) {
if (n % i == 0) {
prime = false;
break;
}
}
}

if (prime == true) {
console.log("Prime");
} else {
console.log("Not Prime");
}
