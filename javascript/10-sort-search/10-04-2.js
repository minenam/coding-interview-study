// Listy class 구현
class Listy {
  constructor(array) {
    this.container = array || []; // Listy 내부 저장소
  }
  /**
   * 주어진 인덱스에 위치한 원소를 반환한다.
   * @param {number} i - 인덱스
   * @returns {number} - 주어진 인덱스에 위치한 원소, 존재하지 않으면 -1 반환
   */
  elementAt(i) {
    if (i >= this.container.length || i < 0) {
      return -1;
    } else {
      return this.container[i];
    }
  }
}

/**
 * Listy 자료구조에서 특정 값을 찾는 함수.
 * @param {Listy} listy - Listy 자료구조
 * @param {number} target - 찾으려는 값
 * @returns {number} - 찾은 값의 인덱스, 존재하지 않으면 -1 반환
 */
function searchListy(listy, target) {
  let index = 1; // 초기 인덱스를 1로 설정
  // Listy의 원소가 존재하고 목표 값보다 작은 경우에만 인덱스를 두 배로 증가시킴
  while (listy.elementAt(index) !== -1 && listy.elementAt(index) < target) {
    index *= 2;
  }
  // 이진 탐색 함수를 호출하여 목표 값을 찾음
  return binarySearch(listy, target, index / 2, index);
}

/**
 * 이진 탐색 알고리즘을 사용하여 주어진 Listy에서 특정 값을 찾는 함수.
 * @param {Listy} listy - Listy 자료구조
 * @param {number} target - 찾으려는 값
 * @param {number} low - 탐색 범위의 시작 인덱스
 * @param {number} high - 탐색 범위의 끝 인덱스
 * @returns {number} - 찾은 값의 인덱스, 존재하지 않으면 -1 반환
 */
function binarySearch(listy, target, low, high) {
  // low가 high보다 작거나 같을 때까지 반복
  while (low <= high) {
    // 중간 인덱스를 계산
    let mid = Math.floor((low + high) / 2);
    // 중간 원소를 가져옴
    let middleElement = listy.elementAt(mid);
    // 중간 원소가 목표 값과 같으면 해당 인덱스를 반환
    if (middleElement === target) {
      return mid;
    } else if (middleElement === -1 || middleElement > target) {
      // 중간 원소가 -1이거나 목표 값보다 큰 경우, 뒷 부분을 탐색
      high = mid - 1;
    } else {
      // 중간 원소가 목표 값보다 작은 경우, 앞 부분을 탐색
      low = mid + 1;
    }
  }
  // 목표 값을 찾지 못한 경우 -1 반환
  return -1;
}

/* TEST */
const listy = new Listy([2, 3, 4, 6]);
console.log(searchListy(listy, 3) === 1); // true
console.log(searchListy(listy, 2) === 0); // true
console.log(searchListy(listy, 6) === 3); // true
console.log(searchListy(listy, 1) === -1); // true
console.log(searchListy(listy, 10) === -1); // true
console.log(searchListy(listy, 5) === -1); // true
