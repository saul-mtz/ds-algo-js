/**
 * Find the Running Median
 * 
 * https://www.hackerrank.com/challenges/find-the-running-median/problem
 */
import { createHeap } from '../../../data-structures/Heap/MaxHeap';

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the runningMedian function below.
 */
function runningMedian(a) {
  const maxHeap = createHeap();
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const aCount = parseInt(readLine(), 10);

    let a = [];

    for (let aItr = 0; aItr < aCount; aItr++) {
        const aItem = parseInt(readLine(), 10);
        a.push(aItem);
    }

    let result = runningMedian(a);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
