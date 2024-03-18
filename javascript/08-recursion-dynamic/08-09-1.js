/**!SECTION
 * 괄호: n-쌍의 괄호로 만들 수 있는 모든 합당한(괄호가 적절히 열리고 닫힌) 조합을 출력히는 알고리즘을 구현하라
 표I
 입력: 3
 출력: ((())), (()O),(())O,O(()),000
 */

// n 쌍의 괄호로 만들 수 있는 모든 합당한 조합을 출력하는 함수
function generateParenthesis(n) {
    const result = [];

    // 재귀적으로 괄호 조합 생성하는 helper 함수
    function generate(current, open, close) {
        // 기저 사례: 열린 괄호와 닫힌 괄호가 모두 n쌍씩 있다면 현재 조합을 결과에 추가
        if (open === n && close === n) {
            result.push(current);
            return;
        }

        // 열린 괄호가 닫힌 괄호보다 적으면 열린 괄호를 추가
        if (open < n) {
            generate(current + '(', open + 1, close);
        }

        // 닫힌 괄호가 열린 괄호보다 적으면 닫힌 괄호를 추가
        if (close < open) {
            generate(current + ')', open, close + 1);
        }
    }

    generate('', 0, 0); // 재귀 호출 시작
    return result;
}

// n=3 일 때 괄호 조합 출력
console.log(generateParenthesis(3)); // [ '((()))', '()(())', '(())()', '(()())', '()()()' ]

