import Trie from "./Trie";
test("insert", () => {
  const trie = new Trie();

  trie.insert("BANANITA");
  trie.insert("ZOE");
  trie.insert("BASTON");
  trie.insert("BARATO");
  trie.insert("BARO");
  trie.insert("BANANA");
  trie.insert("SAUL");
  trie.insert("ANA");
  trie.insert("SAULPINGOKAZUMARE");
  trie.insert("");

  expect(trie.find("SAUL")).toStrictEqual(true);
  expect(trie.find("BAN")).toStrictEqual(true);
  expect(trie.find("BAR")).toStrictEqual(true);
  expect(trie.find("BARO")).toStrictEqual(true);
  expect(trie.find("S")).toStrictEqual(true);
  expect(trie.find("ANAP")).toStrictEqual(false);
});
