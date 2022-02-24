/**
 * Permutation in String
 * https://leetcode.com/problems/permutation-in-string/submissions/
 *
 * Solved using sliding window technique, the main idea is that there is no need to compute all the permutations.
 * Any permutation of the first string will have the same number of chars, to compare that it is included in the second string
 * we only need to compare that the same characters have the same frequency.
 *
 * Also, to compute the occurences of a substring we can use the information from prev string (before slide), only two charactes
 * frequencies needs to be updated.
 *
 * Runtime decrement from 2550ms to 168 when doing pre-compute.
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const increaseCounter = (node, c) => {
  if (!node.hasOwnProperty(c)) {
    node[c] = 1;
  } else {
    node[c]++;
  }
};

const decreaseCounter = (node, c) => {
  if (!node.hasOwnProperty(c)) {
    return;
  }

  if (node[c] === 1) {
    delete node[c];
  } else {
    node[c]--;
  }
};

const computeFrequences = (str, a, b) => {
  const frequences = {};
  for (let index = a; index < b; index++) {
    increaseCounter(frequences, str[index]);
  }
  return frequences;
};

const equals = (obj1, obj2) => {
  for (let c in obj1) {
    if (!obj2.hasOwnProperty(c) || obj1[c] !== obj2[c]) {
      return false;
    }
  }
  return true;
};

var checkInclusion = function (s1, s2) {
  if (typeof s1 !== "string" || typeof s2 !== "string" || s1.length > s2.length) {
    return false;
  }

  const s1Freqs = computeFrequences(s1, 0, s1.length);
  // because only the first time I need to compute the occurences for all chars in the substring
  const windowFreqs = computeFrequences(s2, 0, s1.length);

  if (equals(s1Freqs, windowFreqs)) {
    return true;
  }

  // slide the window and try to find occurrences
  for (let i = 1; i <= s2.length - s1.length; i++) {
    // does not compute the whole freqs, just decrease the prev first, and update the new last
    decreaseCounter(windowFreqs, s2[i - 1]);
    increaseCounter(windowFreqs, s2[i + s1.length - 1]);
    if (equals(s1Freqs, windowFreqs)) {
      return true;
    }
  }
  return false;
};
