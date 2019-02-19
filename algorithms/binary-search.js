function binarySearch(values, value, indexLeft, indexRight) {
  if (indexLeft === undefined) {
    return binarySearch(values, value, 0, values.length - 1);
  }
  const length = indexRight - indexLeft + 1;
  if (length === 0) {
    return -1;
  } else if (length === 1) {
    return values[indexLeft] === value ? indexLeft : -1;
  }

  const indexMiddle = Math.floor(indexLeft + length / 2);
  console.log({ length, indexMiddle, indexLeft, indexRight });
  if (value >= values[indexMiddle]) {
    return binarySearch(values, value, indexMiddle, indexRight);
  }
  return binarySearch(values, value, indexLeft, indexMiddle - 1);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7));
