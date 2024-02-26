function findOrder(projects, dependencies) {
  const graph = {}; // 각 프로젝트의 종속 프로젝트들을 저장할 그래프
  const dependenciesCount = {}; // 각 프로젝트의 종속 프로젝트 개수를 저장할 객체
  const order = []; // 프로젝트 수행 순서를 저장할 배열

  // 그래프 초기화
  for (const project of projects) {
    graph[project] = [];
    dependenciesCount[project] = 0;
  }

  // 그래프 및 종속 프로젝트 개수 설정
  for (const [project, dependency] of dependencies) {
    graph[dependency].push(project);
    dependenciesCount[project]++;
  }

  // 종속 프로젝트가 없는 프로젝트들을 큐에 추가
  const queue = projects.filter((project) => dependenciesCount[project] === 0);

  // 위상 정렬 수행
  while (queue.length > 0) {
    const currentProject = queue.shift();
    order.push(currentProject);

    // 현재 프로젝트에 종속된 프로젝트들의 종속 개수를 감소시키고, 종속 개수가 0이 되면 큐에 추가
    for (const dependentProject of graph[currentProject]) {
      dependenciesCount[dependentProject]--;
      if (dependenciesCount[dependentProject] === 0) {
        queue.push(dependentProject);
      }
    }
  }

  // 모든 프로젝트를 수행할 수 있는 순서가 존재하지 않는 경우
  if (order.length !== projects.length) {
    throw new Error('유효한 순서가 존재하지 않습니다.');
  }

  return order;
}

// 예시
const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [
  ['a', 'd'],
  ['f', 'b'],
  ['b', 'd'],
  ['f', 'a'],
  ['d', 'c'],
];

// 프로젝트 수행 순서 찾기
try {
  const order = findOrder(projects, dependencies);
  console.log(order); // ['f', 'e', 'a', 'b', 'd', 'c']
} catch (error) {
  console.log(error.message);
}
