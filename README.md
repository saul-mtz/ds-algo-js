# ds-algo-js
Data Structures and Algorighms in Javascript

Prettier syntax formatter

# Bundle a solution
In order to create copy/pasteable solution without write the whole solutions in a single file I use the awesome [rollupjs](https://rollupjs.org) bundler.
## Example
For the [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree) problem I wrote [this solution](roblems/LeetCode/Maximum\ Depth\ of\ Binary\ Tree) and bundled it with:
```
yarn bundle problems/LeetCode/Maximum\ Depth\ of\ Binary\ Tree/index.js
```
there will be a single file in `./bundle.js' with the whole solution code.
