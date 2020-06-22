import Graph from "./adjacency-list";

const buildExample = (graph) => {
  graph.addEdge(1, 2, 24);
  graph.addEdge(1, 4, 20);
  graph.addEdge(3, 1, 3);
  graph.addEdge(4, 3, 12);
};

const toArray = (neighborsMap) => {
  const data = [];
  for (const entry of neighborsMap) {
    data.push(entry);
  }
  return data;
};

const testAdjacent = (graph) =>
  test("adjacent", () => {
    expect(graph.adjacent(1, 2)).toBe(24);
    expect(graph.adjacent(1, 3)).toBe(3);
    expect(graph.adjacent(1, 4)).toBe(20);
    expect(graph.adjacent(3, 4)).toBe(12);

    expect(graph.adjacent(1, 1)).toBeFalsy();
    expect(graph.adjacent(2, 3)).toBeFalsy();
    expect(graph.adjacent(2, 4)).toBeFalsy();
  });

const testNeighbors = (graph) =>
  test("neighbors", () => {
    // https://jestjs.io/docs/en/expect#tobeundefined
    expect(graph.neighbors(5)).toBeUndefined();

    // https://jestjs.io/docs/en/expect#expectarraycontainingarray
    expect(toArray(graph.neighbors(1))).toEqual(
      expect.arrayContaining([
        [2, 24],
        [3, 3],
        [4, 20],
      ])
    );
    expect(toArray(graph.neighbors(2))).toEqual(expect.arrayContaining([[1, 24]]));
    expect(toArray(graph.neighbors(3))).toEqual(
      expect.arrayContaining([
        [1, 3],
        [4, 12],
      ])
    );
    expect(toArray(graph.neighbors(4))).toEqual(
      expect.arrayContaining([
        [1, 20],
        [3, 12],
      ])
    );
  });

describe("Adjacency List implementation", () => {
  const graph = new Graph(4, 4);
  buildExample(graph);
  testAdjacent(graph);
  testNeighbors(graph);
});
