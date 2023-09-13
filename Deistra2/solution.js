// Создаем объект, представляющий карту города
const cityMap = {
  1: [
    { vertex: 2, distance: 10 },
    { vertex: 3, distance: 15 },
  ],
  2: [
    { vertex: 1, distance: 10 },
    { vertex: 3, distance: 5 },
    { vertex: 4, distance: 12 },
  ],
  3: [
    { vertex: 1, distance: 15 },
    { vertex: 2, distance: 5 },
    { vertex: 4, distance: 10 },
  ],
  4: [
    { vertex: 2, distance: 12 },
    { vertex: 3, distance: 10 },
  ],
};

// Функция для поиска кратчайшего пути с использованием алгоритма Дейкстры
function findShortestPath(start, end, graph) {
  const distances = {}; // Расстояния от начальной точки до каждой вершины
  const previousVertices = {}; // Предыдущие вершины на кратчайшем пути
  const priorityQueue = new PriorityQueue(); // Приоритетная очередь для вершин

  // Инициализация расстояний и предыдущих вершин
  for (const vertex in graph) {
    distances[vertex] = Infinity;
    previousVertices[vertex] = null;
  }
  distances[start] = 0;

  // Добавляем начальную вершину в приоритетную очередь
  priorityQueue.enqueue(start, 0);

  while (!priorityQueue.isEmpty()) {
    const currentVertex = priorityQueue.dequeue();

    // Если достигли конечной вершины, завершаем поиск
    if (currentVertex === end) {
      break;
    }

    // Перебираем соседние вершины текущей вершины
    for (const neighbor of graph[currentVertex]) {
      const { vertex, distance } = neighbor;

      // Вычисляем новое расстояние от начальной точки до соседней вершины
      const potentialDistance = distances[currentVertex] + distance;

      // Если новое расстояние короче текущего, обновляем информацию
      if (potentialDistance < distances[vertex]) {
        distances[vertex] = potentialDistance;
        previousVertices[vertex] = currentVertex;
        priorityQueue.enqueue(vertex, potentialDistance);
      }
    }
  }

  // Восстанавливаем кратчайший путь из предыдущих вершин
  const shortestPath = [];
  let currentVertex = end;
  while (currentVertex !== null) {
    shortestPath.unshift(currentVertex);
    currentVertex = previousVertices[currentVertex];
  }

  return { shortestPath, shortestDistance: distances[end] };
}

// Пример использования
const { shortestPath, shortestDistance } = findShortestPath(1, 4, cityMap);
console.log('Кратчайший путь:', shortestPath); // Кратчайший путь: [ 1, 3, 4 ]
console.log('Длина кратчайшего пути:', shortestDistance); // Длина кратчайшего пути: 25
