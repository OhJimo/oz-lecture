
// 삼항 연산자

let score = 90;
let grade = score >= 90 ? 'A+' : 'A';  // true 면, : 기준 앞, fales 면 뒤
console.log(grade);

//

let math = 80;
let avg = 90;
let english = 100;

let isMathLowAvg = math < avg;
console.log('isMathLowAvg', isMathLowAvg);

let isLowEnglishLowAvg = english < avg;
console.log('isLowEnglishLowAvg', isLowEnglishLowAvg);

let avgMathGrade = isMathLowAvg ? '수학점수 평균 이하' : '수학점수 평균 이상';
console.log('avgMathGrade', avgMathGrade);

let avgEnglishGrade = avgEnglishGrade ? '영어점수 평균 이하' : '영어점수 평균 이상';
console.log('avgEnglishGrade', avgEnglishGrade);