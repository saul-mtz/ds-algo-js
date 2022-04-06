// https://leetcode.com/problems/maximum-profit-in-job-scheduling/

/*
Jobs are not in order, so I have to check all of them
*/
var getNextIndexes = (i, startTime, endTime) => {
  // find the next job that starts after job i has finished
  let next = 0;
  let nextIndexAfter = -1;
  let nextIndexInBetween = -1;
  let minStartTimeInBetween = Number.MAX_SAFE_INTEGER;
  let minStartTimeAfter = Number.MAX_SAFE_INTEGER;

  for (let next = 0; next < startTime.length; next++) {
    if (startTime[next] >= startTime[i] && next !== i) {
      if (startTime[next] < endTime[i]) {
        // between starting and ending the current job
        if (startTime[next] < minStartTimeInBetween) {
          minStartTimeInBetween = startTime[next];
          nextIndexInBetween = next;
        }
      } else {
        if (startTime[next] < minStartTimeAfter) {
          minStartTimeAfter = startTime[next];
          nextIndexAfter = next;
        }
      }
    }
  }

  return { nextIndexAfter, nextIndexInBetween };
};

// max profit that we can get starting in point i
var maxProfitFrom = (i, jobs, cache) => {
  if (i < 0 || i > jobs.length - 1) {
    return 0;
  }

  if (cache[i]) {
    return cache[i];
  }

  let { nextIndexAfter, nextIndexInBetween } = getNextIndexes(i, startTime, endTime);

  // the max including or excluding the current job
  cache[i] = Math.max(
    profit[i] + maxProfitFrom(nextIndexAfter, startTime, endTime, profit, cache), // including
    maxProfitFrom(nextIndexInBetween, startTime, endTime, profit, cache) // excluding
  );

  return cache[i];
};

let buildJobs = (startTime, endTime, profit) => {
  let jobs = [];
  for (let i = 0; i < startTime.length; i++) {
    jobs.push({
      startTime: startTime[i],
      endTime: endTime[i],
      profit: profit[i],
    });
  }

  return jobs.sort((a, b) => {
    a.startTime > b.startTime;
  });
};

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  let cache = {};
  let jobs = buildJobs(startTime, endTime, profit);
  return maxProfitFrom(0, jobs, cache);
};

console.log(jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]));

//export default jobScheduling;

/*
Jest testing 

import jobScheduling from ".";

test("From Problem Description", () => {
  expect(jobScheduling([1,2,3,3], [3,4,5,6], [50,10,40,70])).toEqual(120);
  expect(jobScheduling([1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60])).toEqual(150);
  expect(jobScheduling([1,1,1], [2,3,4], [5,6,4])).toEqual(6);

  // not passing
  expect(jobScheduling([6,15,7,11,1,3,16,2], [19,18,19,16,10,8,19,8], [2,9,1,19,5,7,3,19])).toEqual(41);
});

*/
