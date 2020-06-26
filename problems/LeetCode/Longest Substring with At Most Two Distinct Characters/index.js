/**
 * Longest Substring with At Most Two Distinct Characters
 * @see https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters
 * 
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  if (s.length < 3) {
    return s.length;
  }

  const map = {};
  let max = -Infinity;
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    const c = s[j];
    if (c in map) {
      //
      map[c] = j;
    } else {
      if (Object.keys(map).length === 2) {
        // which element to delete??
        const prevChar = s[j - 1];
        const chars = Object.keys(map);
        const keyToDelete = chars[0] === prevChar ? chars[1] : chars[0];
        i = map[keyToDelete] + 1;
        delete map[keyToDelete];
      }
      map[c] = j;
    }
    max = Math.max(max, j - i + 1);
  }

  return max;
};
