/**
 * Trie
 * @see https://en.wikipedia.org/wiki/Trie
 */ //en.wikipedia.org/wiki/Trie

/**
 * Trie node, it contains all the methods needed for the whole tree, the trie is just
 * a trie node with some children nodes
 */
function Node() {
  /**
   * children is only defined in insert(), when there is at least one child
   */
  this.isLeaf = () => this.children === undefined;

  /**
   * "insert" means:
   * read str
   */
  this.insert = (str, strIndex) => {
    if (typeof str !== "string" || str.length === 0) {
      // avoid side effects, wrong string value
      return;
    } else if (strIndex === str.length) {
      // avoid overflow
      return;
    }

    if (!this.children) {
      this.children = {};
    }

    const currentChar = str[strIndex];
    if (!this.children.hasOwnProperty(currentChar)) {
      this.children[currentChar] = new Node();
    }
    this.children[currentChar].insert(str, strIndex + 1);
  };

  this.find = (str, strIndex) => {
    // string found, is a leaf node (it means no more strings with the same prefix)
    if (this.isLeaf()) {
      return true;
    }

    // string found, there are more there exists other strings with the same suffix
    if (str.length === strIndex) {
      return true;
    }

    const currentChar = str[strIndex];
    if (this.children.hasOwnProperty(currentChar)) {
      return this.children[currentChar].find(str, strIndex + 1);
    }
    return false;
  };

  /**
   * Traverse the trie using DFS, accumulates the suffixes in backwards
   */
  this.toArray = () => {
    if (this.isLeaf()) {
      return;
    }

    const suffixes = [];
    Object.keys(this.children)
      .sort()
      .forEach((key) => {
        const childSuffixes = this.children[key].toArray();
        if (!childSuffixes) {
          suffixes.push(key);
        } else {
          for (let childSuffix in childSuffixes) {
            suffixes.push(`${key}${childSuffixes[childSuffix]}`);
          }
        }
      });

    return suffixes;
  };
}

function Trie() {
  this.root = new Node();
  this.insert = (str) => this.root.insert(str, 0);
  this.find = (str) => this.root.find(str, 0);
  this.toString = () => {
    return this.root.toArray();
  };
}

export default Trie;
