function swapEvenOddBits(num) {
  // 짝수 번째 비트와 홀수 번째 비트를 나누기 위한 마스크 생성
  let evenMask = 0xAAAAAAAA; // 짝수 번째 비트가 1인 마스크
  let oddMask = 0x55555555; // 홀수 번째 비트가 1인 마스크

  // 짝수 번째 비트와 홀수 번째 비트 추출
  let evenBits = num & evenMask;
  let oddBits = num & oddMask;

  // 추출된 비트를 오른쪽으로 이동하여 맞바꿈
  evenBits >>= 1;
  oddBits <<= 1;

  // 맞바뀐 비트를 다시 합쳐서 반환
  return evenBits | oddBits;
}

// 예시 
let num = 42; // 101010(2)

// 함수 호출 및 결과 출력
console.log(swapEvenOddBits(num).toString(2)); // 10101
