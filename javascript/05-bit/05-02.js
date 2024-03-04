function doubleToBinaryString(num) {
  if (num <= 0 || num >= 1) {
      return "ERROR"; // 0과 1 사이의 실수가 아닌 경우 에러 출력
  }

  let binary = ".";
  let count = 0;

  while (num > 0) {
      if (count >= 32) {
          return "ERROR"; // 32비트 이상의 문자열로 표현할 수 없는 경우 에러 출력
      }

      let digit = num * 2;
      if (digit >= 1) {
          binary += "1";
          num = digit - 1;
      } else {
          binary += "0";
          num = digit;
      }

      count++;
  }

  return binary;
}

// 예시
let num = 0.5;

console.log(doubleToBinaryString(num)); // .1
