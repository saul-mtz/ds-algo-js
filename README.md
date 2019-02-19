# ds-algo-js
Data Structures and Algorighms in Javascript

Prettier syntax formatter

# Bundle a single file solution
In order to create copy/pasteable code have to write the whole solution in a single file I use the awesome [rollupjs](https://rollupjs.org) bundler.

For instance, For the [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree) problem I wrote [this solution](problems/LeetCode/Maximum\ Depth\ of\ Binary\ Tree) and bundled it with:
```
yarn bundle problems/LeetCode/Maximum\ Depth\ of\ Binary\ Tree/index.js
```
there will be a single file in `./bundle.js` with the whole solution code.

# Problems
List of solved problems using this repo:
## LeetCode
- [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)[[src](problems/LeetCode/Maximum\ Depth\ of\ Binary\ Tree/index.js)][[test](/problems/LeetCode/Maximum\ Depth\ of\ Binary\ Tree/test.js)]
