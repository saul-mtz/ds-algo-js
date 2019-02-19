let elementsArray;
let dataSet;

function powerSet(set) {
  dataSet = set;
  const powerSetLength = Math.pow(2, set.length);
  elementsArray = new Array(set.length); // allocate the needed memory
  for (let i = 0; i < powerSetLength - 1; i++) {
    console.log(buildStr(i.toString(2).padStart(set.length, "0"), set));
  }
}

function buildStr(binStr) {
  for (let i = 0; i < binStr.length; i++) {
    elementsArray[i] = "1" === binStr[i] ? dataSet[i] : "";
  }
  return elementsArray.join("");
}

powerSet(["a", "b", "c"]);
// powerSet(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']);
