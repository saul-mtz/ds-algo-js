/**
 * Remove an element from the array (values)
 * NOTE: this method mutates the original array
 *
 * @param {any} values
 * @param {any} searchElement
 */
export const removeElement = (values, searchElement) => {
  const index = values.indexOf(searchElement);
  // element not present
  if (index === -1) {
    return values;
  }
  values.splice(index, 1);
  return values;
};
