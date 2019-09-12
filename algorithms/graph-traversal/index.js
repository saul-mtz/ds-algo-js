import Queue from "../../data-structures/Queue";
import Stack from "../../data-structures/Stack";

/**
 * @see https://en.wikipedia.org/wiki/Depth-first_search
 */
export const depthFirstSearch = (vertex, options) => {
  const visited = new Set();
  const stack = new Stack(vertex);
  const { processFn } = options;

  // TODO: Use TS to avoid these hacky checks
  const process = typeof processFn === "function" ? processFn : node => console.log(node.val);

  while (!stack.isEmpty()) {
    const head = stack.pop();
    if (!process(head)) {
      return;
    }

    if (head.left) {
      stack.push(head.left);
    }

    if (head.right) {
      stack.push(head.right);
    }
  }
};
