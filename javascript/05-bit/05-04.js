function findMinMaxWithSameNumberOfOnes(num) {
  // 주어진 숫자의 이진수로 변환하고 1의 개수를 센다.
  let countOnes = countOnesInBinary(num);

  // 가장 작은 숫자는 주어진 숫자보다 작은 수 중에서 가장 큰 수이며,
  // 가장 큰 숫자는 주어진 숫자보다 큰 수 중에서 가장 작은 수이다.
  let min = findNextNumberWithSameNumberOfOnes(num, countOnes, -1);
  let max = findNextNumberWithSameNumberOfOnes(num, countOnes, 1);

  return { min, max };
}

function countOnesInBinary(num) {
  let count = 0;
  while (num > 0) {
      if (num & 1) {
          count++;
      }
      num >>= 1;
  }
  return count;
}

function findNextNumberWithSameNumberOfOnes(num, countOnes, direction) {
  let nextNum = num + direction;
  while (countOnesInBinary(nextNum) !== countOnes) {
      nextNum += direction;
  }
  return nextNum;
}

// 예시 
let num = 10; // 이진수로 변환하면 "1010", 1의 개수는 2개

console.log(findMinMaxWithSameNumberOfOnes(num)); // { min: 9, max: 12 }
