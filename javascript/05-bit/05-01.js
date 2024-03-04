function insertBits(N, M, i, j) {
  // 1. M을 왼쪽으로 i만큼 시프트하여 적절한 위치로 이동
  M <<= i;

  // 2. j부터 i까지의 비트를 0으로 설정
  // j부터 i까지의 비트를 1로 설정한 마스크 생성
  let mask = (~0 << (j + 1)) | ((1 << i) - 1);
  // N에서 j부터 i까지의 비트를 0으로
  N &= mask;

  // 3. N과 M을 합쳐서 결과를 반환
  return N | M;
}

// 예시
const N = parseInt("10000000000", 2); // N = 1024
const M = parseInt("10011", 2); // M = 19
const i = 2;
const j = 6;

const result = insertBits(N, M, i, j);
console.log(result.toString(2)); // 10001001100
