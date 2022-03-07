import Heap from '.';

/**
 * Implements the heap as defined in https://en.wikipedia.org/wiki/Heap_(data_structure)
 * */
class MinHeap implements Heap {
  elements: number[] = [];

  // Basic Operations
  /**
   * find a maximum item of a max-heap, or a minimum item of a min-heap, respectively (a.k.a. peek)
   */
  find = (): number => {
    return this.isEmpty() ? undefined : this.elements[0];
  };

  /**
   * adding a new key to the heap (a.k.a., push)
   */
  insert = (element: number) => {
    this.elements.push(element);
    this.siftUp(this.size() - 1);
  };

  /**
   * returns the node of maximum value from a max heap
   */
  extract = (): number => {
    if (this.isEmpty()) {
      return undefined;
    }
    const rootValue = this.find();
    this.delete();
    return rootValue;
  };

  /**
   * removing the root node of a max heap (or min heap), respectively
   */
  delete = () => {
    if (this.isEmpty()) {
      return undefined;
    }

    // remove the last element
    const last = this.elements.pop();

    if (!this.isEmpty()) {
      // replace the current root with the prev last element from the array (so the current root value is deleted)
      this.elements[0] = last;
      this.siftDown(0);
    }
  }

  /**
   * pop root and push a new key. More efficient than pop followed by push, since only need to balance once, not twice.
   */
  replace = (element: number) => {
    if (this.isEmpty()) {
      return this.insert(element);
    }

    this.elements[0] = element;
    this.siftDown(0);
  }

  // Inspection Operations

  /**
   * return the number of items in the heap.
   */
  size = (): number => {
    return this.elements.length;
  }

  /**
   * return true if the heap is empty, false otherwise.
   */
  isEmpty = () => {
    return this.elements.length === 0;
  }

  // Internal operations
  /**
   * Updating a key within a max- or min-heap, respectively
   */
  increaseKey = () => { }


  /**
   * delete an arbitrary node (followed by moving last node and sifting to maintain heap)
   */
  deleteMax = (): number => {
    return this.elements[0];
  }

  /**
   * move a node up in the tree, as long as needed; used to restore heap condition after insertion. Called "sift" because node moves up the tree until it reaches the correct level, as in a sieve.
   */
  siftUp = (index: number) => {
    // already in the root?
    if (index === 0) {
      return;
    }

    let parentIndex = Math.floor((index - 1) / 2);
    if (this.elements[index] < this.elements[parentIndex]) {
      // swap inplace: https://en.wikipedia.org/wiki/XOR_swap_algorithm
      this.elements[parentIndex] ^= this.elements[index];
      this.elements[index] ^= this.elements[parentIndex];
      this.elements[parentIndex] ^= this.elements[index];
      this.siftUp(parentIndex);
    }
  }


  hasChildren = (index: number): boolean => {
    if (this.isEmpty()) {
      return false;
    }

    /*
    Cover the cases:
      0         0
     / \      /
    1   2    1
     */
    const leftChildIndex = index * 2 + 1;
    return leftChildIndex < this.size();
  }
  /**
   * move a node down in the tree, similar to sift-up; used to restore heap condition after deletion or replacement.
   */
  siftDown = (index: number) => {
    if (!this.hasChildren(index)) {
      return ;
    }
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;
    let smallerChildIndex = rightChildIndex >= this.size() ? leftChildIndex : (this.elements[leftChildIndex] < this.elements[rightChildIndex] ? leftChildIndex : rightChildIndex);
    if (this.elements[smallerChildIndex] < this.elements[index]) {
      // swap inplace: https://en.wikipedia.org/wiki/XOR_swap_algorithm
      this.elements[smallerChildIndex] ^= this.elements[index];
      this.elements[index] ^= this.elements[smallerChildIndex];
      this.elements[smallerChildIndex] ^= this.elements[index];
      return this.siftDown(smallerChildIndex);
    }
  }

  //return this;
}

// Creation operations
export const createHeap = (): Heap => {
  return new MinHeap();
}

/**
 * Create a heap out of given array of elements
 */
export const heapify = (initialElements: number[]): Heap => {
  const heap = createHeap();

  if (Array.isArray(initialElements)) {
    initialElements.forEach((el) => {
      heap.insert(el);
    });
  }

  return heap;
}

/**
 * joining two heaps to form a valid new heap containing all the elements of both, preserving the original heaps.
 */
export const merge = () => {
  throw new Error("Not implemented");
}

/**
 * meld: joining two heaps to form a valid new heap containing all the elements of both, destroying the original heaps.
 */
export const join = () => {
  throw new Error("Not implemented");
}
