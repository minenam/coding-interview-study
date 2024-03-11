// 전체 탐색
function primeNaive(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 제곱근까지만 구하기
function primeSlightlyBetter(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 예
console.log(primeNaive(13)); // true
console.log(primeNaive(27)); // false
console.log(primeSlightlyBetter(13)); // true
console.log(primeSlightlyBetter(27)); // false