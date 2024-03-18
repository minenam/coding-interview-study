/**
 * 8.2 격자판(grid)상의 로봇:
 * 행의 개수는 f,열의 개수는 c인 격자판의 왼쪽상단 꼭짓점에 로봇이 놓여 있다고 상상해 보자. 이 로봇은 오른쪽 아니면 아래 쪽으로만 이동할 수 있다. 
 * 하지만 어떤 셀(ce!l)은 ‘금지 구역’으로 지정되어 있어서 로봇이 접근할 수 없다. 왼쪽 상단 꼭짓점에서 오른쪽 하단 꼭짓점 으로의 경로를 찾는 알고리즘을 설계하라.
 */

// 주어진 격자판에서 로봇이 오른쪽 아니면 아래쪽으로만 이동하여 시작점에서 도착점까지의 경로를 찾는 함수
function findPath(grid) {
    if (grid.length === 0 || grid[0].length === 0) {
        return null; // 격자판이 비어있으면 경로가 없음
    }

    const rows = grid.length;
    const cols = grid[0].length;

    // dp 배열 초기화
    const dp = new Array(rows).fill().map(() => new Array(cols).fill(0));

    // 첫 번째 열을 채움
    for (let i = 0; i < rows; i++) {
        if (grid[i][0] === 1) {
            break; // 금지 구역을 만나면 그 이후로는 경로가 없음
        }
        dp[i][0] = 1;
    }

    // 첫 번째 행을 채움
    for (let j = 0; j < cols; j++) {
        if (grid[0][j] === 1) {
            break; // 금지 구역을 만나면 그 이후로는 경로가 없음
        }
        dp[0][j] = 1;
    }

    // 나머지 셀을 채움
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (grid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; // 왼쪽과 위쪽의 값을 더함
            }
        }
    }

    return dp[rows - 1][cols - 1]; // 오른쪽 하단 꼭짓점에 도달하는 경로의 수를 반환
}

// 예시
const grid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
];

// 주어진 격자판에서 시작점에서 도착점까지의 경로 수 출력
console.log(findPath(grid)); // 출력: 2
