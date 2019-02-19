/**
 * Stack
 * @see https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
 */
export default function Stack() {
  this.elements = [];
  this.isEmpty = () => {
    return this.elements.length === 0;
  };

  /**
   * Javascript builtin push
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   */
  this.push = element => {
    return this.elements.push(element);
  };

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
   */
  this.pop = () => {
    return this.elements.pop();
  };
}
