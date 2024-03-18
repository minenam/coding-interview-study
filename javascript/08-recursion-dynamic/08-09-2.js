/**!SECTION
 * 괄호: n-쌍의 괄호로 만들 수 있는 모든 합당한(괄호가 적절히 열리고 닫힌) 조합을 출력히는 알고리즘을 구현하라
 표I
 입력: 3
 출력: ((())), (()O),(())O,O(()),000
 */
// n쌍의 괄호로 만들 수 있는 모든 합당한 조합을 생성하는 함수
const parens = (n) => {
    const answers = []; // 결과를 저장할 배열
    
    // 재귀 함수: 현재 괄호, 남은 쌍 수, 이미 사용한 괄호 조합을 전달받음
    const recurse = (currParens, remainingPairs, used = {}) => {
      // 남은 쌍이 없으면 현재 괄호 조합을 결과에 추가
      if (remainingPairs === 0) {
        answers.push(currParens);
      } else {
        // 현재 괄호를 기준으로 세 가지 가능한 조합을 검사하여 재귀 호출
        if (!used[`(${currParens})`]) {
          used[`(${currParens})`] = true;
          recurse(`(${currParens})`, remainingPairs - 1, used);
        }
        if (!used[`()${currParens}`]) {
          used[`()${currParens}`] = true;
          recurse(`()${currParens}`, remainingPairs - 1, used); 
        }
        if (!used[`${currParens}()`]) {
          used[`${currParens}()`] = true;
          recurse(`${currParens}()`, remainingPairs - 1, used);      
        }
      }
    };
    
    // 재귀 함수 호출 시작
    recurse('', n);
    
    // 결과 배열 반환
    return answers;
  };
  
  /* TEST */
  const testn = 3;
  console.log(parens(testn)); // 주어진 n에 대한 유효한 괄호 조합 출력
  // [ '((()))', '()(())', '(())()', '(()())', '()()()' ]
  