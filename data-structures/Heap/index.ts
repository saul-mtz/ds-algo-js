/**
 * Implements the heap as defined in https://en.wikipedia.org/wiki/Heap_(data_structure)
 * */
export default interface Heap {

  // Basic Operations
  /**
   * find a maximum item of a max-heap, or a minimum item of a min-heap, respectively (a.k.a. peek)
   */
  find: () => number;

  /**
   * adding a new key to the heap (a.k.a., push)
   */
  insert: (element: number) => void;
  
  /**
   * returns the node of maximum value from a max heap
   */
  extract: () => number;

  /**
   * removing the root node of a max heap (or min heap), respectively
   */
  delete: () => void;

  /**
   * pop root and push a new key. More efficient than pop followed by push, since only need to balance once, not twice.
   */
  replace: (element: number) => void;

  // Inspection Operations

  /**
   * return the number of items in the heap.
   */
  size: () => number;

  /**
   * return true if the heap is empty, false otherwise.
   */
  isEmpty: () => boolean;
}
