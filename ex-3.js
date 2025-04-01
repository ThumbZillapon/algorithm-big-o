function sortedByName(studentInfo) {
  const n = studentInfo.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (studentInfo[j].firstname > studentInfo[j + 1].firstname) {
        let temp = studentInfo[j];
        studentInfo[j] = studentInfo[j + 1];
        studentInfo[j + 1] = temp;
      }
    }
  }
  return studentInfo;
}

function addScoreToSelectedStudent(
  studentInfo,
  targetStudent,
  subject,
  addScore
) {
  let sortedStudentsInfo = sortedByName(studentInfo);
  let left = 0;
  let right = sortedStudentsInfo.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (sortedStudentsInfo[mid].firstname === targetStudent) {
      sortedStudentsInfo[mid]["score"][subject] = addScore;
      return `${targetStudent} has got ${sortedStudentsInfo[mid]["score"][subject]} on ${subject}`;
    } else if (sortedStudentsInfo[mid].firstname < targetStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return `Cannot find ${targetStudent} on the list`;
}

const studentsInfo = [
  {
    firstname: "Sarah",
    lastname: "Miller",
    score: { math: 70, science: 0, art: 100 },
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    score: { math: 0, science: 80, art: 0 },
  },
  {
    firstname: "Olivia",
    lastname: "Taylor",
    score: { math: 0, science: 0, art: 60 },
  },
  {
    firstname: "Emily",
    lastname: "Davis",
    score: { math: 85, science: 75, art: 0 },
  },
  {
    firstname: "Michael",
    lastname: "Brown",
    score: { math: 60, science: 0, art: 88 },
  },
];

console.log(addScoreToSelectedStudent(studentsInfo, "Emily", "art", 70)); // Emily has got 70 on art
console.log(addScoreToSelectedStudent(studentsInfo, "Olive", "math", 80)); //Cannot find Olive on the list
