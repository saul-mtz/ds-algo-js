import Queue from ".";

test("new", () => {
  const queue = new Queue();
  expect(queue.elements).toStrictEqual([]);
  expect(queue.isEmpty()).toStrictEqual(true);

  // with initial value
  expect(new Queue([1, 2, 3]).elements).toStrictEqual([1, 2, 3]);

  // with custom, single object inital value
  expect(new Queue({ foo: "bar" }).elements).toStrictEqual([{ foo: "bar" }]);
});

test("queue", () => {
  const queue = new Queue();
  expect(queue.enqueue(1)).toBe(1);
  expect(queue.elements).toStrictEqual([1]);
  expect(queue.isEmpty()).toStrictEqual(false);

  expect(queue.enqueue(2)).toBe(2);
  queue.enqueue(3);
  queue.enqueue(3);
  expect(queue.enqueue(4)).toBe(5);
  expect(queue.elements).toStrictEqual([1, 2, 3, 3, 4]);
  expect(queue.isEmpty()).toStrictEqual(false);
});

test("dequeue", () => {
  const queue = new Queue();
  queue.enqueue(1);
  expect(queue.dequeue()).toEqual(1);
  expect(queue.elements).toStrictEqual([]);
  expect(queue.isEmpty()).toStrictEqual(true);
  expect(queue.dequeue()).toStrictEqual(undefined);
  queue.enqueue(2);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  expect(queue.dequeue()).toEqual(2);
  expect(queue.elements).toStrictEqual([2, 3, 4]);
  expect(queue.isEmpty()).toStrictEqual(false);
  expect(queue.dequeue()).toEqual(2);
  expect(queue.dequeue()).toEqual(3);
  expect(queue.dequeue()).toEqual(4);
  expect(queue.elements).toStrictEqual([]);
  expect(queue.isEmpty()).toStrictEqual(true);
});
