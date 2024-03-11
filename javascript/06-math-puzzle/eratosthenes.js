// 에라토스테네스의 체
function sieveOfEratosthenes(num) {
  // 소수를 넣을 목록
  const primes = [];
  const isPrime = Array(num + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // 소수가 아닌 배수 지우기
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // 다음 소수 찾기
  for (let i = 2; i <= num; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// 예
console.log(sieveOfEratosthenes(25)); // [2, 3, 5, 7, 11, 13, 17, 19, 23]
