export const removeChar = (str, index) => {
  const length = str.length;
  if (length < 1 || index >= length) {
    return str;
  }
  return str.substring(0, index) + str.substring(index + 1);
};
