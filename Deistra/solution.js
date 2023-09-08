const fs = require('fs');

function distance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
const n = Number(input[0]);
const cities = input.slice(1, n + 1).map((line) => {
  const [x, y] = line.split(' ').map(Number);
  return { x, y };
});

const maxDistance = Number(input[n + 1]);
const [start, end] = input[n + 2].split(' ').map(Number);

function dijkstra(graph, start) {
  const dist = new Array(n).fill(Number.MAX_VALUE);
  dist[start] = 0;
  const visited = new Array(n).fill(false);

  for (let count = 0; count < n - 1; count++) {
    let minDist = Number.MAX_VALUE;
    let minIndex = -1;

    for (let v = 0; v < n; v++) {
      if (!visited[v] && dist[v] <= minDist) {
        minDist = dist[v];
        minIndex = v;
      }
    }

    visited[minIndex] = true;

    for (let v = 0; v < n; v++) {
      if (
        !visited[v] &&
        graph[minIndex][v] !== 0 &&
        dist[minIndex] !== Number.MAX_VALUE &&
        dist[minIndex] + graph[minIndex][v] < dist[v]
      ) {
        dist[v] = dist[minIndex] + graph[minIndex][v];
      }
    }
  }

  return dist;
}

const graph = new Array(n).fill(null).map(() => new Array(n).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i !== j) {
      const dist = distance(cities[i].x, cities[i].y, cities[j].x, cities[j].y);
      if (dist <= maxDistance) {
        graph[i][j] = dist;
      }
    }
  }
}

const distArray = dijkstra(graph, start - 1);
const result =
  distArray[end - 1] === Number.MAX_VALUE ? -1 : distArray[end - 1];

fs.writeFileSync('output.txt', result.toString());
