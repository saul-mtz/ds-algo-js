import Stack from "../Stack";

test("new", () => {
  const stack = new Stack();
  expect(stack.elements).toStrictEqual([]);
  expect(stack.isEmpty()).toStrictEqual(true);
});

test("initial data", () => {
  let stack = new Stack(1);
  expect(stack.elements).toStrictEqual([1]);
  expect(stack.isEmpty()).toStrictEqual(false);

  stack = new Stack([1, 2, 3]);
  expect(stack.elements).toStrictEqual([1, 2, 3]);
  expect(stack.isEmpty()).toStrictEqual(false);

  // custom type value
  stack = new Stack({ foo: "bar" });
  expect(stack.elements).toStrictEqual([{ foo: "bar" }]);
  expect(stack.isEmpty()).toStrictEqual(false);
  expect(stack.pop()).toStrictEqual({ foo: "bar" });
});

test("peek", () => {
  expect(new Stack().peek()).toBeUndefined();
  expect(new Stack("a").peek()).toStrictEqual("a");
  expect(new Stack(8).peek()).toStrictEqual(8);
  expect(new Stack(["a", "b", "c"]).peek()).toStrictEqual("c");
  expect(new Stack([2, 4, 6]).peek()).toStrictEqual(6);
});

test("push", () => {
  const stack = new Stack();
  expect(stack.push(1)).toBe(1);
  expect(stack.elements).toStrictEqual([1]);
  expect(stack.isEmpty()).toStrictEqual(false);

  expect(stack.push(2)).toBe(2);
  stack.push(3);
  stack.push(3);
  expect(stack.push(4)).toBe(5);
  expect(stack.elements).toStrictEqual([1, 2, 3, 3, 4]);
  expect(stack.isEmpty()).toStrictEqual(false);
});

test("pop", () => {
  const stack = new Stack();
  stack.push(1);
  expect(stack.pop()).toEqual(1);
  expect(stack.elements).toStrictEqual([]);
  expect(stack.isEmpty()).toStrictEqual(true);
  expect(stack.pop()).toStrictEqual(undefined);
  stack.push(2);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.pop();
  expect(stack.elements).toStrictEqual([2, 2, 3]);
  expect(stack.isEmpty()).toStrictEqual(false);
});
