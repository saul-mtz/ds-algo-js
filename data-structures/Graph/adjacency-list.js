import { timingSafeEqual } from "crypto";

/**
 * @param {number} n Number of nodes
 * @param {nmber} m Number of edges
 */
function Graph () {
  this.adjacentList = new Map();

  /**
   * Operations
   * @see https://en.wikipedia.org/wiki/Graph_(abstract_data_type)#Operations
   */

  /**
   * tests whether there is an edge from the vertex x to the vertex y;
   */
  this.adjacent = (x, y) => {
    if (this.adjacentList.has(x) && this.adjacentList.get(x).has(y)) {
      return this.adjacentList.get(x).get(y);
    }
    return null;
  }

  /**
   * lists all vertices y such that there is an edge from the vertex x to the vertex y
   */
  this.neighbors = (x, y) => {
    if (!this.adjacentList.has(x)) {
      return undefined;
    }
    return this.adjacentList.get(x);
  }

  this.addEdge = (x, y, weight) => {
    if (this.adjacentList.has(x)) {
      this.adjacentList.get(x).set(y, weight);
    } else {
      // initialize a Map with an array
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Relation_with_Array_objects
      this.adjacentList.set(x, new Map([[y, weight]]));
    }

    if (this.adjacentList.has(y)) {
      this.adjacentList.get(y).set(x, weight);
    } else {
      this.adjacentList.set(y, new Map([[x, weight]]));
    }

    //console.log('Adding edge', x, y, weight, this.adjacentList);
  }
}

export default Graph;
