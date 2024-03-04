function countFlipsToConvert(A, B) {
  // A와 B를 XOR 연산하여 뒤집어야 하는 비트를 구한다.
  let xorResult = A ^ B;
  // XOR 결과에서 1의 개수를 센다.
  let flips = 0;
  while (xorResult !== 0) {
      // XOR 결과에서 오른쪽으로 한 비트씩 이동하면서 1의 개수를 센다.
      flips += xorResult & 1;
      xorResult >>= 1;
  }
  return flips;
}

// 예시 입력값
let A = 29; // 11101(2)
let B = 15; // 01111(2)

// 함수 호출 및 결과 출력
console.log(countFlipsToConvert(A, B)); // 2
