# ds-algo-js
Data Structures and Algorighms in Javascript

- Prettier syntax formatter

# [Data Structures](data-structures)
- [Binary Tree](data-structures/BinaryTree)
- [Stack](data-structures/Stack)
- [Queue](data-structures/Queue)
- [Trie](data-structures/Trie)
- [Heap](data-structures/Heap)
  - Min-heap
  - Max-heap

# [Algorithms](algorithms)
- Tree Traversal
  - [Breadth-first search](algorithms/tree-traversal/index.js)
  - [Depth-first search](algorithms/tree-traversal/index.js)
    - [Pre-order (NLR)](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR))
    - [In-order (LNR)](https://en.wikipedia.org/wiki/Tree_traversal#In-order_(LNR))
    - [Post-order (LRN)](https://en.wikipedia.org/wiki/Tree_traversal#Post-order_(LRN))

# Test
Using jest

# Bundle
In order to create copy/pasteable code have to write the whole solution in a single file I use the awesome [rollupjs](https://rollupjs.org) bundler.

For instance, For the [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree) problem I wrote [this solution](problems/LeetCode/Maximum%20Depth%20of%20Binary%20Tree) and bundled it with:
```
yarn bundle problems/LeetCode/Maximum\ Depth\ of\ Binary\ Tree/index.js
```
there will be a single file in `./bundle.js` with the whole solution code.

# [Problems](problems)
## [LeetCode](problems/LeetCode)
## [HackerRank](problems/HackerRank)
