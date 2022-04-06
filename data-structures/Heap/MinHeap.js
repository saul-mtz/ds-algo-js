"use strict";
exports.__esModule = true;
exports.join = exports.merge = exports.heapify = exports.createHeap = void 0;
/**
 * Implements the heap as defined in https://en.wikipedia.org/wiki/Heap_(data_structure)
 * */
var MinHeap = /** @class */ (function () {
  function MinHeap() {
    var _this = this;
    this.elements = [];
    // Basic Operations
    /**
     * find a maximum item of a max-heap, or a minimum item of a min-heap, respectively (a.k.a. peek)
     */
    this.find = function () {
      return _this.isEmpty() ? undefined : _this.elements[0];
    };
    /**
     * adding a new key to the heap (a.k.a., push)
     */
    this.insert = function (element) {
      _this.elements.push(element);
      _this.siftUp(_this.size() - 1);
    };
    /**
     * returns the node of maximum value from a max heap
     */
    this.extract = function () {
      if (_this.isEmpty()) {
        return undefined;
      }
      var rootValue = _this.find();
      _this["delete"]();
      return rootValue;
    };
    /**
     * removing the root node of a max heap (or min heap), respectively
     */
    this["delete"] = function () {
      if (_this.isEmpty()) {
        return undefined;
      }
      // remove the last element
      var last = _this.elements.pop();
      if (!_this.isEmpty()) {
        // replace the current root with the prev last element from the array (so the current root value is deleted)
        _this.elements[0] = last;
        _this.siftDown(0);
      }
    };
    /**
     * pop root and push a new key. More efficient than pop followed by push, since only need to balance once, not twice.
     */
    this.replace = function (element) {
      if (_this.isEmpty()) {
        return _this.insert(element);
      }
      _this.elements[0] = element;
      _this.siftDown(0);
    };
    // Inspection Operations
    /**
     * return the number of items in the heap.
     */
    this.size = function () {
      return _this.elements.length;
    };
    /**
     * return true if the heap is empty, false otherwise.
     */
    this.isEmpty = function () {
      return _this.elements.length === 0;
    };
    // Internal operations
    /**
     * Updating a key within a max- or min-heap, respectively
     */
    this.increaseKey = function () {};
    /**
     * delete an arbitrary node (followed by moving last node and sifting to maintain heap)
     */
    this.deleteMax = function () {
      return _this.elements[0];
    };
    /**
     * move a node up in the tree, as long as needed; used to restore heap condition after insertion. Called "sift" because node moves up the tree until it reaches the correct level, as in a sieve.
     */
    this.siftUp = function (index) {
      // already in the root?
      if (index === 0) {
        return;
      }
      var parentIndex = Math.floor((index - 1) / 2);
      if (_this.elements[index] < _this.elements[parentIndex]) {
        // swap inplace: https://en.wikipedia.org/wiki/XOR_swap_algorithm
        _this.elements[parentIndex] ^= _this.elements[index];
        _this.elements[index] ^= _this.elements[parentIndex];
        _this.elements[parentIndex] ^= _this.elements[index];
        _this.siftUp(parentIndex);
      }
    };
    this.hasChildren = function (index) {
      if (_this.isEmpty()) {
        return false;
      }
      /*
            Cover the cases:
              0         0
             / \      /
            1   2    1
             */
      var leftChildIndex = index * 2 + 1;
      return leftChildIndex < _this.size();
    };
    /**
     * move a node down in the tree, similar to sift-up; used to restore heap condition after deletion or replacement.
     */
    this.siftDown = function (index) {
      if (!_this.hasChildren(index)) {
        return;
      }
      var leftChildIndex = index * 2 + 1;
      var rightChildIndex = index * 2 + 2;
      var smallerChildIndex =
        rightChildIndex >= _this.size()
          ? leftChildIndex
          : _this.elements[leftChildIndex] < _this.elements[rightChildIndex]
          ? leftChildIndex
          : rightChildIndex;
      if (_this.elements[smallerChildIndex] < _this.elements[index]) {
        // swap inplace: https://en.wikipedia.org/wiki/XOR_swap_algorithm
        _this.elements[smallerChildIndex] ^= _this.elements[index];
        _this.elements[index] ^= _this.elements[smallerChildIndex];
        _this.elements[smallerChildIndex] ^= _this.elements[index];
        return _this.siftDown(smallerChildIndex);
      }
    };
    //return this;
  }
  return MinHeap;
})();
// Creation operations
var createHeap = function () {
  return new MinHeap();
};
exports.createHeap = createHeap;
/**
 * Create a heap out of given array of elements
 */
var heapify = function (initialElements) {
  var heap = (0, exports.createHeap)();
  if (Array.isArray(initialElements)) {
    initialElements.forEach(function (el) {
      heap.insert(el);
    });
  }
  return heap;
};
exports.heapify = heapify;
/**
 * joining two heaps to form a valid new heap containing all the elements of both, preserving the original heaps.
 */
var merge = function () {
  throw new Error("Not implemented");
};
exports.merge = merge;
/**
 * meld: joining two heaps to form a valid new heap containing all the elements of both, destroying the original heaps.
 */
var join = function () {
  throw new Error("Not implemented");
};
exports.join = join;
