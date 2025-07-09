
let math = 80;
let avg = 90;
let english = 100;

let isMathLowAvg = math < avg;
console.log('isMathLowAvg', isMathLowAvg);

let isLowEnglishLowAvg = english < avg;
console.log('isLowEnglishLowAvg', isLowEnglishLowAvg);

// 수학점수가 평균보다 낮고, 영어점수가 평균보다 낮아? [AND]
console.log(isMathLowAvg && isLowEnglishLowAvg);

// 수학점수가 평균보다 낮거나, 영어점수가 평균보다 낮아? [OR]
console.log(isMathLowAvg || isLowEnglishLowAvg);

// && 교집합
// || 합집합

