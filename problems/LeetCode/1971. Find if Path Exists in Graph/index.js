class Graph {
  constructor() {
    this.adjacentList = new Map();
  }

  addEdge(x, y) {
    if (!this.adjacentList.has(x)) {
      this.adjacentList.set(x, new Set());
    }
    this.adjacentList.get(x).add(y);

    if (!this.adjacentList.has(y)) {
      this.adjacentList.set(y, new Set());
    }
    this.adjacentList.get(y).add(x);
  }

  dfs(node, destination) {
    const visited = new Set();
    const stack = [ node ];
  
    while (stack.length) {
      const head = stack.pop();
      if (head === destination) {
        return true;
      }

      visited.add(head);

      // push adjacent nodes to the sack
      this.adjacentList.get(head).forEach(n => {
        if (!visited.has(n)) {
          stack.push(n);
        }
      })
    }

    return false;
  }
}

var validPath = function(n, edges, source, destination) {
  if (n === 1) {
    return true;
  }
  const graph = new Graph();
  for (const edge of edges) {
    graph.addEdge(edge[0], edge[1]);
  }

  return graph.dfs(source, destination);
}
