function findRoute(graph, start, end) {
  return dfs(graph, new Set(), start, end);
}

function dfs(graph, visited, start, end) {
  if (start === end) {
    return true; // 시작 = 끝 이면 true
  }
  visited.add(start); // 현재 노드 방문

  for (const node of graph[start]) {
    if (!visited.has(node)) {
      if (dfs(graph, visited, node, end)) {
        // 방문하지 않은 노드인 경우 재귀 호출
        return true;
      }
    }
  }
  return false;
}

// 예시
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: ['F'],
  E: [],
  F: ['A'],
};

const start = 'A';
const end = 'F';
console.log(findRoute(graph, start, end)); // true
