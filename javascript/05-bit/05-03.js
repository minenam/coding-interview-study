function flipBit(num) {
  let binary = num.toString(2); // 주어진 정수를 이진수 문자열로 변환
  let maxLen = 0; // 가장 긴 1의 길이
  let curLen = 0; // 현재 1의 연속된 길이
  let prevLen = 0; // 이전 1의 연속된 길이

  for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '1') {
          curLen++; // 1이 연속으로 나오는 경우 현재 길이 증가
      } else {
          // 0을 만나면 현재까지의 최대 길이를 갱신하고 이전 길이로 저장
          prevLen = curLen;
          curLen = 0; // 현재 길이 초기화
      }
      // 현재까지의 최대 길이를 갱신
      maxLen = Math.max(maxLen, prevLen + curLen + 1);
  }

  return maxLen;
}

// 예시
let num = 1775; // 11011101111

console.log(flipBit(num)); // 출력: 8, 11011101111을 11011111111로 변경했을 때 8개의 연속된 1이 나옴
