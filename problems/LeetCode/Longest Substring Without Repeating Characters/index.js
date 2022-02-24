/**
 * Longest Substring Without Repeating Characters
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * The idea is to store any substring in a set, when finding the first repeated leter stop pushing into the set.
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  if (typeof s !== "string" || s.length === 0) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    let charSet = [];
    let j = i;
    do {
      charSet.push(s[j++]);
    } while (!charSet.includes(s[j]) && j < s.length);

    if (charSet.length > longest) {
      longest = charSet.length;
    }
  }
  return longest;
};
