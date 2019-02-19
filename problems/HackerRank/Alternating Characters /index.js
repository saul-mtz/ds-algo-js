/**
 * Alternating Characters 
 * @see https://www.hackerrank.com/challenges/alternating-characters
 * */

function alternatingCharacters(s) {
  if (s.length <= 1) {
    return 0;
  }

  let current = s[0];
  let deletions = 0;
  for (let i = 1; i < s.length; i ++) {
    if (s[i] === current) {
      deletions ++;
    } else {
      current = s[i];
    }
  }

  return deletions;
}

export default alternatingCharacters;
