let l = 10;
let r = 20;
let found = false;

for (let n = l; n <= r; n++) {
let prime = true;

```
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
    console.log(n);
    found = true;
}
```

}

if (found == false) {
console.log("No primes");
}
