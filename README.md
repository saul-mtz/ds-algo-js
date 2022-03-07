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
- Graph
  - [Dijkstra's algorithm](algorithms/dijkstra/index.js)

# Setup
Follow [this doc](docs/Setup_JS_Env.md).

# Test
## Using VSCode default Debugger
Since node >= v15 does support ES modules, running with F5 should work. See `examples/import/index.js`

## Using Commnad Line
As of node `v16.14.0` I need to specify `--experimental-specifier-resolution=node` to make it resolve dir imports correctly.

```
cd examples/import
node --experimental-specifier-resolution=node index.js
```
Or add the following alias to `~/.profile`
```
alias _node="node --experimental-specifier-resolution=node"
```

## Using Jest
All tests in the repo:
```
npm test
```

Using jest, move to the problem folder and run, [`--findRelatedTests` info here](https://jestjs.io/docs/cli#--findrelatedtests-spaceseparatedlistofsourcefiles)
```
jest --findRelatedTests fileToTest.js 
```

Then use `F5` to debug, see [Debugging](https://code.visualstudio.com/docs/typescript/typescript-tutorial#_debugging).

To transpile a single directory I need to move to the folder and then `tsc file.ts`.

## Typescript
I still need to find a way to debug without transpiling first, so far with our [`./tsconfig.json`](tsconfig.json) file I can do:
```
# Whole project
tsc
```

# Bundle
In order to create copy/pasteable code have to write the whole solution in a single file I use the awesome [rollupjs](https://rollupjs.org) bundler.

For instance, For the [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree) problem I wrote [this solution](problems/LeetCode/Maximum%20Depth%20of%20Binary%20Tree) and bundled it with:
```
npm run bundle problems/LeetCode/Maximum\ Depth\ of\ Binary\ Tree/index.js
```
there will be a single file in `./bundle.js` with the whole solution code.
