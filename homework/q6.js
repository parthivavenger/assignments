let n = 5082;
let count = 0;

while (n > 0) {
count++;
n = Math.floor(n / 10);
}

if (count == 0) {
count = 1;
}

console.log(count);
