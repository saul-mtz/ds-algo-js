import { createHeap, heapify } from './MaxHeap';

const buildHeapWithCreateHeap = () => {
  return createHeap();
}

describe("Create", () => {
  test("createHeap", () => {
    const heap = buildHeapWithCreateHeap();
    expect(heap).toBeTruthy();
    expect(heap.size()).toStrictEqual(0);
    expect(heap.isEmpty()).toStrictEqual(true);
  });

  test("heapify", () => {
    let heap = buildHeapWithCreateHeap();
    expect(heap).toBeTruthy();
    expect(heap.size()).toStrictEqual(0);
    expect(heap.isEmpty()).toStrictEqual(true);

    heap = heapify(null);
    expect(heap).toBeTruthy();
    expect(heap.size()).toStrictEqual(0);
    expect(heap.isEmpty()).toStrictEqual(true);

    heap = heapify([1,2]);
    expect(heap).toBeTruthy();
    expect(heap.size()).toStrictEqual(2);
    expect(heap.isEmpty()).toStrictEqual(false);
  });

});

describe("Insert", () => {
  test("Single element", () => {
    const heap = buildHeapWithCreateHeap();
    heap.insert(1);
    expect(heap.size()).toStrictEqual(1);
    expect(heap.isEmpty()).toStrictEqual(false);
    expect(heap.find()).toStrictEqual(1);
  });

  test("Many elements", () => {
    const heap = buildHeapWithCreateHeap();
    heap.insert(4);
    heap.insert(3);
    heap.insert(5);
    heap.insert(2);
    heap.insert(1);
    expect(heap.size()).toStrictEqual(5);
    expect(heap.find()).toStrictEqual(5);
  });
});

describe("Delete", () => {
  test("Empty heap", () => {
    const heap = buildHeapWithCreateHeap();
    heap.delete();
    heap.delete();
    expect(heap.isEmpty()).toStrictEqual(true);
  });

  test("Single element", () => {
    const heap = heapify([1]);
    heap.delete();
    expect(heap.isEmpty()).toStrictEqual(true);
  });

  test("Two elements, root and one (left) child", () => {
    const heap = heapify([1, 2]);
    heap.delete();
    expect(heap.isEmpty()).toBe(false);
    expect(heap.find()).toBe(1);
  });
  test("Two children, left is sifted up", () => {
    const heap = heapify([3, 2, 1]);
    heap.delete();

    expect(heap.size()).toBe(2);
    expect(heap.find()).toBe(2);
  });

  test("Two children, right is sifted up", () => {
    const heap = heapify([4, 1, 2]);
    heap.delete();

    expect(heap.size()).toBe(2);
    expect(heap.find()).toBe(2);
  });
  
  test("Two level traversal", () => {
    const heap = heapify([4,3,5,2,1]);
    heap.delete();
    expect(heap.size()).toStrictEqual(4);
    expect(heap.find()).toStrictEqual(4);
  });

});
