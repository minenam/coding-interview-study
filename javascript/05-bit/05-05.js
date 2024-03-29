/**
 * 주어진 숫자가 2의 거듭제곱인지를 확인
 * (( n & (n-1)) == 0)은 n과 n-1의 비트 AND 연산 결과가 0인지 확인
 * 2의 거듭제곱인 수는 이진수로 표현했을 때 한 자리만 1이고 나머지는 0으로 이루어져 있음
 * n과 n-1의 AND 연산을 하면 0이 나오게 됨
 * 예를 들어, 8은 2의 거듭제곱이므로 이진수로는 1000이기 때문에에 8과 7의 AND 연산을 하면 0이 나옴
 * 8 = 1000, 7 = 0111, 8 & 7 = 0000
 */

function isPowerOfTwo(n) {
  return (n & (n - 1)) === 0;
}

// 예시
let n = 8;

console.log(isPowerOfTwo(n)); // true
