/**
 * 크기를 모르는 정렬된 원소탐색
 * 배열과 비슷하지만 size 메서드가 없는 Listy라는 자료구조가 있다.
 * 여기에는 i 인텍스에 위치한 원소를 0 (1) 시간에 알 수 있는 elementAt(i) 메서드가 존재한다.
 * 만약 i가 배 열의 범위를 넘어섰다면 -1을 반환한다(이 때문에 이 자료구조는 양의 정수만 지원한다).
 * 양의 정수가 정렬된 Listy가 주어졌을 때， 원소 X의 인텍스를 찾는 알고리즘을 작성하라.
 * 만약 x가 여러 번 등장한다연 아무거나 하나 반환하면 된다.
 */
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

// helper function
/**
 * Listy의 끝 인덱스를 찾는 함수
 * @param {Listy} listy - Listy 자료구조
 * @param {number} last - 탐색 범위의 시작 인덱스
 * @param {number} term - 탐색 범위의 끝 인덱스
 * @returns {number} - Listy의 끝 인덱스
 */
const findEnd = (listy, last, term) => {
  // 초기값 설정 및 빈 Listy 처리
  if (last === undefined && term === undefined) {
    last = 0;
    term = 1;
    // edge case where listy is empty
    if (listy.elementAt(last) === -1) {
      return 0;
    }
  }
  // 끝 인덱스를 찾을 때까지 재귀 호출
  if (listy.elementAt(last) !== -1 && listy.elementAt(term) !== -1) {
    return findEnd(listy, last, term * 2);
  } else if (listy.elementAt(last) !== -1 && listy.elementAt(term) === -1) {
    if (last === term - 1) {
      return term;
    }
    const half = Math.floor((term - last) / 2);
    const mid = last + half;
    if (listy.elementAt(mid) === -1) {
      return findEnd(listy, last, mid);
    } else {
      return findEnd(listy, mid, term);
    }
  } else {
    return -1;
  }
};

/**
 * Listy에서 이진 탐색을 수행하여 주어진 값의 인덱스를 찾는 함수
 * @param {Listy} listy - Listy 자료구조
 * @param {number} value - 찾으려는 값
 * @param {number} front - 탐색 범위 시작 인덱스
 * @param {number} back - 탐색 범위 끝 인덱스
 * @returns {number} - 찾은 값의 인덱스, 존재하지 않으면 -1 반환
 */
const sortedSearchNoSize = (listy, value, front, back) => {
  // 인자가 주어지지 않았을 경우 초기값 설정
  if (listy === undefined) {
    return -1;
  }
  if (front === undefined && back === undefined) {
    front = 0;
    const end = findEnd(listy); // Listy의 끝 인덱스 찾기
    back = end;
  }
  // 범위가 같아지면 찾는 값이 존재하지 않는 것으로 판단
  if (front === back) {
    return -1;
  }
  // 중간 인덱스 계산
  const half = Math.floor((back - front) / 2);
  const mid = front + half;
  // 중간 값이 찾는 값과 일치하면 중간 인덱스 반환
  if (listy.elementAt(mid) === value) {
    return mid;
  } else if (value < listy.elementAt(mid)) {
    // 찾는 값이 중간 값보다 작으면 앞 부분 탐색
    return sortedSearchNoSize(listy, value, front, mid);
  } else {
    // 찾는 값이 중간 값보다 크면 뒷 부분 탐색
    if (mid === back - 1) {
      // 끝까지 탐색했을 때
      return -1;
    } else {
      return sortedSearchNoSize(listy, value, mid, back);
    }
  }
};

/* TEST */
// Listy 클래스 동작 확인
let listy = new Listy([1, 2, 3, 4]);
console.log(listy.length === undefined); // true
console.log(listy[1] === undefined); // true
console.log(listy.length === undefined); // true
console.log(listy.elementAt(10) === -1); // true
console.log(listy.elementAt(2) === 3); // true

// sortedSearchNoSize 함수 동작 확인
listy = new Listy([2, 3, 4, 6]);
console.log(sortedSearchNoSize(listy, 3) === 1); // true
console.log(sortedSearchNoSize(listy, 2) === 0); // true
console.log(sortedSearchNoSize(listy, 6) === 3); // true
console.log(sortedSearchNoSize(listy, 1) === -1); // true
console.log(sortedSearchNoSize(listy, 10) === -1); // true
console.log(sortedSearchNoSize(listy, 5) === -1); // true
