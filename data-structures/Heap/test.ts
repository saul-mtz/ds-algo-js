import { createHeap as createMinHeap, heapify as heapifyMinHeap } from './MinHeap';
import { createHeap as createMaxHeap, heapify as heapifyMaxHeap } from './MaxHeap';

describe("Min Heap", () => {
  describe("Create", () => {
    test("createHeap", () => {
      const heap = createMinHeap();
      expect(heap).toBeTruthy();
      expect(heap.size()).toStrictEqual(0);
      expect(heap.isEmpty()).toStrictEqual(true);
    });

    test("heapify", () => {
      let heap = createMinHeap();
      expect(heap).toBeTruthy();
      expect(heap.size()).toStrictEqual(0);
      expect(heap.isEmpty()).toStrictEqual(true);

      heap = heapifyMinHeap(null);
      expect(heap).toBeTruthy();
      expect(heap.size()).toStrictEqual(0);
      expect(heap.isEmpty()).toStrictEqual(true);

      heap = heapifyMinHeap([1,2,3]);
      expect(heap).toBeTruthy();
      expect(heap.size()).toStrictEqual(3);
      expect(heap.isEmpty()).toStrictEqual(false);
    });

  });

  describe("Insert", () => {
    test("Single element", () => {
      const heap = createMinHeap();
      heap.insert(1);
      expect(heap.size()).toStrictEqual(1);
      expect(heap.isEmpty()).toStrictEqual(false);
      expect(heap.find()).toStrictEqual(1);
    });

    test("Many elements", () => {
      const heap = createMinHeap();
      expect(heap.size()).toStrictEqual(0);
      heap.insert(4);
      heap.insert(3);
      heap.insert(5);
      heap.insert(2);
      heap.insert(1);
      expect(heap.size()).toStrictEqual(5);
      expect(heap.find()).toStrictEqual(1);
    });
  });

  describe("Delete", () => {
    test("Empty heap", () => {
      const heap = createMinHeap();
      heap.delete();
      heap.delete();
      expect(heap.isEmpty()).toStrictEqual(true);
    });

    test("Single element", () => {
      const heap = heapifyMinHeap([1]);
      heap.delete();
      expect(heap.isEmpty()).toStrictEqual(true);
    });

    test("Two elements, root and one (left) child", () => {
      const heap = heapifyMinHeap([1, 2]);
      heap.delete();
      expect(heap.isEmpty()).toBe(false);
      expect(heap.find()).toBe(2);
    });
    test("Two children, left is sifted up", () => {
      const heap = heapifyMinHeap([3, 2, 1]);
      heap.delete();

      expect(heap.size()).toBe(2);
      expect(heap.find()).toBe(2);
    });

    test("Two children, right is sifted up", () => {
      const heap = heapifyMinHeap([4, 1, 2]);
      heap.delete();

      expect(heap.size()).toBe(2);
      expect(heap.find()).toBe(2);
    });
    
    test("Two level traversal", () => {
      const heap = heapifyMinHeap([4,3,5,2,1]);
      heap.delete();
      expect(heap.size()).toStrictEqual(4);
      expect(heap.find()).toStrictEqual(2);
    });

  });
});

describe("Max Heap", () => {
  describe("Create", () => {
    test("createHeap", () => {
      const heap = createMaxHeap();
      expect(heap).toBeTruthy();
      expect(heap.size()).toStrictEqual(0);
      expect(heap.isEmpty()).toStrictEqual(true);
    });

    test("heapify", () => {
      let heap = createMaxHeap();
      expect(heap).toBeTruthy();
      expect(heap.size()).toStrictEqual(0);
      expect(heap.isEmpty()).toStrictEqual(true);

      heap = heapifyMaxHeap(null);
      expect(heap).toBeTruthy();
      expect(heap.size()).toStrictEqual(0);
      expect(heap.isEmpty()).toStrictEqual(true);

      heap = heapifyMaxHeap([1,2]);
      expect(heap).toBeTruthy();
      expect(heap.size()).toStrictEqual(2);
      expect(heap.isEmpty()).toStrictEqual(false);
    });

  });

  describe("Insert", () => {
    test("Single element", () => {
      const heap = createMaxHeap();
      heap.insert(1);
      expect(heap.size()).toStrictEqual(1);
      expect(heap.isEmpty()).toStrictEqual(false);
      expect(heap.find()).toStrictEqual(1);
    });

    test("Many elements", () => {
      const heap = createMaxHeap();
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
      const heap = createMaxHeap();
      heap.delete();
      heap.delete();
      expect(heap.isEmpty()).toStrictEqual(true);
    });

    test("Single element", () => {
      const heap = heapifyMaxHeap([1]);
      heap.delete();
      expect(heap.isEmpty()).toStrictEqual(true);
    });

    test("Two elements, root and one (left) child", () => {
      const heap = heapifyMaxHeap([1, 2]);
      heap.delete();
      expect(heap.isEmpty()).toBe(false);
      expect(heap.find()).toBe(1);
    });
    test("Two children, left is sifted up", () => {
      const heap = heapifyMaxHeap([3, 2, 1]);
      heap.delete();

      expect(heap.size()).toBe(2);
      expect(heap.find()).toBe(2);
    });

    test("Two children, right is sifted up", () => {
      const heap = heapifyMaxHeap([4, 1, 2]);
      heap.delete();

      expect(heap.size()).toBe(2);
      expect(heap.find()).toBe(2);
    });
    
    test("Two level traversal", () => {
      const heap = heapifyMaxHeap([4,3,5,2,1]);
      heap.delete();
      expect(heap.size()).toStrictEqual(4);
      expect(heap.find()).toStrictEqual(4);
    });

  });
});
