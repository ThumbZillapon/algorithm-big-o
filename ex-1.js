function findAverageScoreByClass(studentInfo, classNo) {
  const filteredStudents = studentInfo.filter(
    (student) => student.classNumber === classNo
  );

  if (filteredStudents.length === 0) {
    return 0;
  }

  const totalScore = filteredStudents.reduce((acc, cur) => acc + cur.score, 0);
  const averageScore = totalScore / filteredStudents.length;

  return averageScore;
}

const studentsInfo = [
  {
    firstname: "Alice",
    lastname: "Johnson",
    classNumber: 10,
    score: 88,
  },
  {
    firstname: "Brian",
    lastname: "Smith",
    classNumber: 11,
    score: 92,
  },
  {
    firstname: "Catherine",
    lastname: "Davis",
    classNumber: 10,
    score: 85,
  },
  {
    firstname: "David",
    lastname: "Brown",
    classNumber: 12,
    score: 79,
  },
  {
    firstname: "Eva",
    lastname: "Williams",
    classNumber: 11,
    score: 91,
  },
];

console.log(findAverageScoreByClass(studentsInfo, 11)); // 91.5

// O(n) เพราะใช้ filter() และ reduce() ที่ใช้ไล่ตามจำนวนนักเรียน = n