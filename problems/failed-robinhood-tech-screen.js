// I could not solve this problem in my Robinhood tech screen
// I had some problems trying to convert a map to a list, see the desc below
// I was rejected right after

/*
You're developing a system for scheduling advising meetings with students in a Computer Science program. Each meeting should be scheduled when a student has completed 50% of their academic program.

Each course at our university has at most one prerequisite that must be taken first. No two courses share a prerequisite. There is only one path through the program.

Write a function that takes a list of (prerequisite, course) pairs, and returns the name of the course that the student will be taking when they are halfway through their program. (If a track has an even number of courses, and therefore has two "middle" courses, you should return the first one.)

Sample input 1: (arbitrarily ordered)
prereqs_courses1 = [
	["Foundations of Computer Science", "Operating Systems"],
	["Data Structures", "Algorithms"],
	["Computer Networks", "Computer Architecture"],
	["Algorithms", "Foundations of Computer Science"],
	["Computer Architecture", "Data Structures"],
	["Software Design", "Computer Networks"]
]
{
  course0: course1,
  course1: course2
  ...
  coourse3: course0,
}

In this case, the order of the courses in the program is:
	Software Design
	Computer Networks
	Computer Architecture
	Data Structures
	Algorithms
	Foundations of Computer Science
	Operating Systems

Sample output 1:
	"Data Structures"

Sample input 2:
prereqs_courses2 = [
    ["Algorithms", "Foundations of Computer Science"],
    ["Data Structures", "Algorithms"],
    ["Foundations of Computer Science", "Logic"],
    ["Logic", "Compilers"],
    ["Compilers", "Distributed Systems"],
]

Sample output 2:
	"Foundations of Computer Science"

Sample input 3:
prereqs_courses3 = [
	["Data Structures", "Algorithms"],
]

Sample output 3:
	"Data Structures"

Complexity analysis variables:

n: number of pairs in the input
*/

"use strict";

const prereqsCourses1 = [
  ["Foundations of Computer Science", "Operating Systems"],
  ["Data Structures", "Algorithms"],
  ["Computer Networks", "Computer Architecture"],
  ["Algorithms", "Foundations of Computer Science"],
  ["Computer Architecture", "Data Structures"],
  ["Software Design", "Computer Networks"]
];

const prereqsCourses2 = [
  ["Algorithms", "Foundations of Computer Science"],
  ["Data Structures", "Algorithms"],
  ["Foundations of Computer Science", "Logic"],
  ["Logic", "Compilers"],
  ["Compilers", "Distributed Systems"],
];

const prereqsCourses3 = [
  ["Data Structures", "Algorithms"]
];

function buildList(key, coursesMap) {  
  let coursesList = [];
  coursesList.push(key);
  while (key) {
    coursesList.push(coursesMap[key]);
    key = coursesMap[key] ? coursesMap[key] : undefined;
  }
  return coursesList;
}

function midCourse(courses) {
  let coursesMap = {};
  for (let i = 0; i < courses.length; i ++) {
    let pair = courses[i]
    coursesMap[pair[0]] = pair[1];
  }
  
  let coursesList = [];
  let coursesMapKeys = Object.keys(coursesMap);
  let key = coursesMapKeys[iterations];

  coursesList = buildList(coursesMapKeys[0], coursesMap);

  // list was not built entirely
  if (coursesList.length < courses.length) {
    let nextKey;
    for (let i = 0; i < coursesMapKeys.length && !nextKey; i ++) {
      let keyToFind = coursesMapKeys[i];

      // first element that is not in the list
      if (coursesList.indexOf(keyToFind) === -1) {
        nextKey = keyToFind;
      }
    }

    coursesList = buildList(nextKey, coursesMap).concat(coursesList);
  }
  
  console.log({ coursesList });
  let l = coursesList.length;
  return l % 2 === 0 ? [coursesList[l/2-1], coursesList[l/2]] : coursesList[(l-1)/2];
}

console.log(midCourse(prereqsCourses1));
